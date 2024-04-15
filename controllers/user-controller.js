import Knex from "knex";
import knexfile from "../knexfile.js";
const knex = Knex(knexfile);

async function createUser(req, res) {
    const { username, password, email } = req.body;

    try {
        const existingUser = await knex("users")
            .select("")
            .where({ username })
            .orWhere({ email })
            .first();

        if (existingUser) {
            return res.status(400).json({ message: "Username or email already exists" });
        }

        const newUser = await knex("users").insert({
            username, password, email
        });

        res.status(201).json({ message: "user created", userId: newUser[0] });
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: "internal server error" });
    }
}

async function login(req, res) {
    const { username, password } = req.body;

    try {
        const foundUser = await knex("users")
            .select("*")
            .where({ username })
            .first()

        if (!foundUser) {
            return res.status(401).json({ message: "Invalid username/password" });
        }

        if (foundUser.password !== password) {
            return res.json({ message: "Invalid username/password" });
        }

        res.json(foundUser);

    } catch (e) {
        console.error(e);
        res.status(500).json({ message: "Internal server error" })
    }
}



async function getUser(req, res) {
    try {
        const foundUser = await knex("users")
            .select("*")
            .where({ id: req.params.id });

        if (foundUser.length === 0) {
            return res.status(404).json({
                message: `User with id ${req.params.id} not found.`
            });
        }
        const userData = foundUser[0];
        res.json(userData);

    } catch (e) {
        res.status(500).json({
            message: `Unable to retrieve user data for user with ID ${req.params.id}`
        });
    }
};

export { getUser, login, createUser };