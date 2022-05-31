export default function initResumesController(db) {
  const createResume = async (req, res) => {
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

  const getCollection = async (req, res) => {
    await db.Resume.findAll()
      .then((result) => {
        res.send(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return { createResume, getCollection };
}
