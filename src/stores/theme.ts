import {PaletteMode} from "@mui/material";
import {atom} from "jotai";

export const themeMode = atom<PaletteMode>('light');