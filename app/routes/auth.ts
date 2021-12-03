import { Router } from "express";
import { getUsuarios, getUsuario, postUsuario, putUsuario, deleteUsuario } from "../controllers/usuario";

const router = Router();

router.get('/', getUsuarios);
router.get('/:id', getUsuario);
router.post('/', postUsuario);
router.put('/:id', putUsuario);
router.delete('/', deleteUsuario);

export default router;