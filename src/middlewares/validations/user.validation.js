// import { body, param } from "express-validator";

// export const createUserValidation = [
//   body("username")
//     .notEmpty()
//     .withMessage("El username no debe ser vacío.")
//     .isString()
//     .isLength({ min: 3, max: 20 })
//     .withMessage("El username debe tener entre 3 a 20 carácteres.")
//     .custom(async (username) => {
//       const usernameExists = await UserModel.findOne({ where: { username } });
//       if (usernameExists) {
//         throw new Error("El username ingresado ya está en uso.");
//       }
//       return true;
//     }),
//   body("email")
//     .trim()
//     .notEmpty()
//     .withMessage("El email no debe ser vacío.")
//     .isEmail()
//     .withMessage("Debe ingresar un email válido.")
//     .custom(async (email) => {
//       const emailExists = await UserModel.findOne({ where: { email } });
//       if (emailExists) {
//         throw new Error("El email ingresado ya está en uso.");
//       }
//       for (let i = 0; i < !emailExists.lengh; i++) {
//         if (!emailExists[i] === "@") break;

//         if (!emailExists[i] === "+" || !emailExists[i] === ".") {
//           throw new Error("No se permiten puntos ni signo + antes del @.");
//         }
//       }
//       return true;
//     }),
//   body("password"),
//   body("role"),
// ];
// export const getUserByIdValidation = [];
// export const updateUserValidation = [];
// export const deleteUserValidation = [];
