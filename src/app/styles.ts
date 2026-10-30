import { StyleSheet } from "react-native";
import { cores } from "./constants/cores";

export const stylesBase = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cores.background,
  },
  containerAlinhado: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 24,
  },
  Area: {
    backgroundColor: cores.area,
    borderWidth: 1,
    borderColor: cores.borda,
    borderRadius: 8,
    padding: 16,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: cores.texto,
  },
});

export const stylesGradeLivros = StyleSheet.create({
  containerLivros: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    rowGap: 24,
  },
  area: {
    alignItems: 'center',
    width: 140,
  },
  imagem: {
    width: 140,
    height: 210,
    borderRadius: 8,
    resizeMode: 'cover',
    backgroundColor: cores.area,
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: cores.texto,
    marginTop: 6,
    textAlign: 'center',
  },
});

export const stylesLogin = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 28,
    backgroundColor: cores.background,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: cores.texto,
    marginBottom: 36,
  },
  inputs: {
    marginBottom: 18,
  },
  texto: {
    fontSize: 14,
    fontWeight: '600',
    color: cores.texto,
    marginBottom: 6,
  },
  input: {
    backgroundColor: cores.area,
    borderWidth: 1,
    borderColor: cores.borda,
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
    color: cores.texto,
  },
  botao: {
    marginTop: 14,
  },
});

export const stylesId = StyleSheet.create({
  alinhamentoCentral: {
    alignItems: 'center',
    padding: 24,
  },
  imagemGrande: {
    width: 180,
    height: 270,
    borderRadius: 10,
    backgroundColor: cores.area,
    resizeMode: 'cover',
    marginBottom: 16,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: cores.texto,
    textAlign: 'center',
    marginBottom: 6,
  },
  informacoes: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 24,
  },
  texto: {
    fontSize: 14,
    color: cores.texto2,
  },
  sinopseTexto: {
    fontSize: 14,
    lineHeight: 20,
    color: cores.texto,
  },
});

export const stylesPerfil = StyleSheet.create({
  cartaoUsuario: {
    borderRadius: 16,
    padding: 18,
  },
  topoPerfil: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    marginBottom: 12,
  },
  avatar: {
    width: 68,
    height: 68,
    borderRadius: 34,
    borderWidth: 2,
    borderColor: cores.primaria,
  },
  arrobaContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  arroba: {
    fontSize: 14,
    color: cores.primaria,
    marginTop: 2,
  },
  descricao: {
    fontSize: 14,
    lineHeight: 20,
    color: cores.texto,
    marginBottom: 18,
  },
  containerEstatisticas: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: cores.background,
    borderWidth: 1,
    borderColor: cores.borda,
    borderRadius: 12,
    paddingVertical: 12,
  },
estatisticaItem: {
    alignItems: 'center',
    flex: 1,
  },
  numeroEstatistica: {
    fontSize: 16,
    fontWeight: 'bold',
    color: cores.primaria,
  },
  textoEstatistica: {
    fontSize: 12,
    color: cores.secundaria,
  },
});