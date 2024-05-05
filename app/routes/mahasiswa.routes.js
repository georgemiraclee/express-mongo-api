module.exports = app=> {
    const mahasiswa = require("../controllers/mahasiswa.controller")
    const router = require ("express").Router();

    router.get("/", mahasiswa.findAll);
    router.get("/:id", mahasiswa.show);
    router.post("/", mahasiswa.create);
    router.put("/:id", mahasiswa.update);
    router.delete("/:id", mahasiswa.delete);


    app.use("/mahasiswa", router);

    // GET localhost:8000/mahasiswa
}