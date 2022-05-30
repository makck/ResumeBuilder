export default function initUsersController(db) {
  const createUser = async (req, res) => {
    console.log(req.body);
    const profile_image = 'dummy';
    const created_at = new Date();
    const updated_at = new Date();
    const {
      first_name, last_name, email, github_account, linkedin, mobile_number,
    } = req.body;
    try {
      const newUser = await db.User.create({
        first_name, last_name, email, github_account, linkedin, mobile_number, profile_image, created_at, updated_at,
      });

      res.cookie('userId', newUser.id);
      res.send({ newUser });
    } catch (error) {
      console.log(error);
    }
  };

  return { createUser };
}
