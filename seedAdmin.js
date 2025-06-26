await Admin.create({
  email: process.env.ADMIN_EMAIL,
  password: process.env.ADMIN_PASSWORD,
});