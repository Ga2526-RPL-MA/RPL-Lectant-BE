import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const requiredFieldsByRole = {
  dosen: ['nip', 'nama', 'email', 'no_telepon', 'jurusan'],
  mahasiswa: ['nrp', 'nama', 'email', 'no_telepon', 'jurusan', 'angkatan', 'semester', 'dokumen_url'],
};

export const checkProfileComplete = (roles = []) => {
  return async (req, res, next) => {
    const userId = req.user?.id_user;
    const userRole = req.user?.role;

    if (!userId || !userRole) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    if (!roles.includes(userRole)) return next();

    try {
      let profile;

      if (userRole === 'dosen') {
        profile = await prisma.dosen.findUnique({ where: { id_user: userId } });
      } else if (userRole === 'mahasiswa') {
        profile = await prisma.mahasiswa.findUnique({ where: { id_user: userId } });
      }

      if (!profile) {
        return res.status(404).json({ success: false, message: `${userRole} tidak ditemukan` });
      }

      const requiredFields = requiredFieldsByRole[userRole];
      const missingKeys = requiredFields.filter(f => profile[f] === null || profile[f] === undefined);

      if (missingKeys.length > 0) {
        return res.status(400).json({
          success: false,
          message: `Profile ${userRole} belum lengkap. Lengkapi: ${missingKeys.join(', ')}`,
        });
      }

      next();
    } catch (error) {
      console.error("checkProfileComplete error:", error);
      return res.status(500).json({ success: false, message: "Internal server error" });
    }
  };
};
