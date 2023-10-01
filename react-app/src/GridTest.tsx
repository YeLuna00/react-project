import { PlyGms } from "./assets/GamesData";
import GridImgCard  from "./components/GridImgCard";

PlyGms.map((PlyGms)=> (GridImgCard(PlyGms.id, PlyGms.name, PlyGms.details, PlyGms.img)))
