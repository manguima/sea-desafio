import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";

// Tipando o useSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Tipando o useDispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();
