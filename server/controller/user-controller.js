import User from "../model/user-schema.js";

export const userSignup = async (request, response) => {
    try {
        console.log("BODY ===>", request.body);

        const {
            firstname,
            lastname,
            username,
            email,
            password,
            phone
        } = request.body;

        if (!firstname || !lastname || !username || !email || !password || !phone) {
            return response.status(400).json({
                message: "All fields are required"
            });
        }

        const exist = await User.findOne({ email });

        if (exist) {
            return response.status(409).json({
                message: "User already exists. Please use a different email." // Clear error message
            });
        }

        const newUser = new User({
            firstname,
            lastname,
            username,
            email,
            password,
            phone
        });

        console.log("Saving user to database:", newUser);
        const savedUser = await newUser.save();
        console.log("User saved successfully:", savedUser);

        return response.status(200).json({
            message: "Signup successful",
            firstname: savedUser.firstname,
            email: savedUser.email
        });

    } catch (error) {
        console.error("SIGNUP ERROR:", error);
        response.status(500).json({
            message: error.message
        });
    }
};

