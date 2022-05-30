export default function initResumesController(db) {
  const createResume = async (req, res) => {
    console.log('this is the req body', req.body);
    const inputData = req.body;
    const { userId } = req.cookies;
    try {
      const newResume = await db.Resume.create({
        user_id: userId,
        resume_details: inputData,
        created_at: new Date(),
        updated_at: new Date(),
      });

      res.send({ newResume });
    } catch (error) {
      console.log(error);
    }
  };

  return { createResume };
}
