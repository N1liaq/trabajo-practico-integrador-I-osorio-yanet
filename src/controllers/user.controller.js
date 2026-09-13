// import { UserModel } from "../models/user.model.js";

// export const createUser = async (req, res) => {
//   try {
//     const { username, email, password, role = "user" } = req.body;

//     if (!username) {
//       return res.status(400).json({ message: "El username no debe ser nulo." });
//     }

//     const usernameExists = await UserModel.findOne({ where: { username } });
//     console.log(usernameExists);

//     if (usernameExists) {
//       return res.status(400).json({ message: "Este username ya está en uso." });
//     }

//     if (username.length > 100) {
//       return res
//         .status(400)
//         .json({ message: "El username no debe pasar los 100 carácteres." });
//     }

//     if (!email) {
//       return res.status(400).json({ message: "El email no debe ser nulo." });
//     }

//     const emailExists = await UserModel.findOne({ where: { email } });
//     console.log(emailExists);

//     if (emailExists) {
//       console.log("El valor ingresado ya existe.");
//       return res.status(400).json({ message: "Este email ya está en uso." });
//     }

//     if (!password) {
//       return res.status(400).json({ message: "La password no debe ser nula." });
//     }
//     if (password.length > 100) {
//       return res
//         .status(400)
//         .json({ message: "La password no debe pasar los 100 carácteres." });
//     }

//     const cleanRole = role.trim().toLowerCase();
//     const validRoles = ["user", "admin"];

//     if (!validRoles.includes(cleanRole)) {
//       return res.status(400).json({
//         message: `El rol '${role}' no es válido. Los roles permitidos son "user" o "admin".`,
//       });
//     }

//     const newUser = await UserModel.create({
//       username,
//       email,
//       password,
//       role: cleanRole,
//     });
//     return res.status(201).json(newUser);

//   } catch (error) {
//     res.status(500).json({ message: "Error interno del servidor." });
//   }
// };

// export const getAllUser = async (req, res) => {
//   try {
//     const users = await UserModel.findAll();

//     return res.status(200).json(users);
//   } catch (error) {
//     res.status(500).json({ message: "Error interno del servidor." });
//   }
// };

// export const getUserById = async (req, res) => {
//   try {
//     const { id } = req.params;

//     if (!id) {
//       return res
//         .status(400)
//         .json({ message: "El ID del user no debe ser nulo." });
//     }

//     const userExists = await UserModel.findByPk(id);

//     if (!userExists) {
//       return res.status(404).json({
//         message: "¡El user que está buscando no fue encontrado!",
//       });
//     }

//     return res.status(200).json(userExists);
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ message: "Error interno del servidor." });
//   }
// };

// export const updateUser = async (req, res) => {
//   try {
//     const { id } = req.params;

//     if (!id) {
//       return res
//         .status(400)
//         .json({ message: "El ID del user no debe ser nulo." });
//     }

//     const userExists = await UserModel.findByPk(id);

//     if (!userExists) {
//       return res.status(404).json({
//         message: "¡El user que está buscando no fue encontrado!",
//       });
//     }

//     const { username, email, password, role = "user" } = req.body;

//     if (!username) {
//       return res.status(400).json({ message: "El username no debe ser nulo." });
//     }

//     const usernameExists = await UserModel.findOne({ where: { username } });
//     console.log(usernameExists);

//     if (usernameExists) {
//       return res.status(400).json({ message: "Este username ya está en uso." });
//     }

//     if (username.length > 100) {
//       return res
//         .status(400)
//         .json({ message: "El username no debe pasar los 100 carácteres." });
//     }

//     if (!email) {
//       return res.status(400).json({ message: "El email no debe ser nulo." });
//     }

//     const emailExists = await UserModel.findOne({ where: { email } });
//     console.log(emailExists);

//     if (emailExists) {
//       console.log("El valor ingresado ya existe.");
//       return res.status(400).json({ message: "Este email ya está en uso." });
//     }

//     if (!password) {
//       return res.status(400).json({ message: "La password no debe ser nula." });
//     }
//     if (password.length > 100) {
//       return res
//         .status(400)
//         .json({ message: "La password no debe pasar los 100 carácteres." });
//     }

//     const cleanRole = role.trim().toLowerCase();
//     const validRoles = ["user", "admin"];

//     if (!validRoles.includes(cleanRole)) {
//       return res.status(400).json({
//         message: `El rol '${role}' no es válido. Los roles permitidos son "user" o "admin".`,
//       });
//     }

//     await userExists.update({ username, password, email, role: cleanRole });

//     await userExists.reload();
//     return res.status(200).json(userExists);
//   } catch (error) {
//     res.status(500).json({ message: "Error interno del servidor." });
//   }
// };

// export const deleteUser = async (req, res) => {
//   try {
//     const { id } = req.params;

//     if (!id) {
//       return res
//         .status(400)
//         .json({ message: "El ID del user no debe ser nulo." });
//     }

//     const userExists = await UserModel.findByPk(id);

//     if (!userExists) {
//       return res.status(404).json({
//         message: "¡El user que está buscando no fue encontrado!",
//       });
//     }
//     await userExists.destroy();
//     res
//       .status(200)
//       .json({ message: "El usuario fue eliminado correctamente." });
//   } catch (error) {
//     res.status(500).json({ message: "Error interno del servidor." });
//   }
// };
