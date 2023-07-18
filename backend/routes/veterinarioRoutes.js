import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Desde API/VETERINARIOS');
});

export default router;
