import { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { Pokemon } from "../../../models/interface";
import api from "../../../services/api";
import { addPokemon, changePokemonOnDisplay } from "./actions";

type GetPokemonResquest = ReturnType<typeof changePokemonOnDisplay>;

function* getPokemon(action: GetPokemonResquest) {
  const requestedPokemon: AxiosResponse<Pokemon> = yield call(
    api.get,
    `${action.payload}`
  );

  yield put(addPokemon(requestedPokemon.data));
}

export default all([takeLatest("CHANGE_POKEMON", getPokemon)]);

//Teste o takeEvery no lugar do latest depois
