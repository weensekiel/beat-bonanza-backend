import Knex from "knex";
import knexfile from "../knexfile.js";
const knex = Knex(knexfile);

async function getUser(req, res) {
    try {
        const foundUser = await knex("users")
            .select("*")
            .where({ id: req.params.id });

        if (foundUser === 0) {
            return res.status(404).json({
                message: `User with id ${req.params.id} not found.`
            });
        }
        const userData = userFound[0];
        res.json(userData);

    } catch (e) {
        res.status(500).json({
            message: `Unable to retrieve user data for user with ID ${req.params.id},`,
          });
    }
}

export { getUser };