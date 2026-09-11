import { matchedData } from "express-validator";
import { UserModel } from "../models/user.model";

export const createUser = async (req, res) => {
  try {
    // const dataValidate = matchedData(req);
    // await UserModel.create(dataValidate);
    // res.status(201).json(dataValidate);
  } catch (error) {
    res.status(500).json({ message: "Error interno del servidor." });
  }
};

export const getAllUser = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Error interno del servidor." });
  }
};

export const getUserById = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Error interno del servidor." });
  }
};

export const updateUser = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Error interno del servidor." });
  }
};

export const deleteUser = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Error interno del servidor." });
  }
};
