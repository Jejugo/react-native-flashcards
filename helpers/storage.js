import { AsyncStorage } from 'react-native';
import { InitialData } from '../utils/predata';

DECK_STORAGE_KEY = 'Flashcard:decks';

export function getDecks(){
  AsyncStorage.getItem(DECK_STORAGE_KEY)
  .then(results => JSON.parse(results));
};

export async function setInitialDeck(){
  await AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(InitialData));
  const result = await AsyncStorage.getItem(DECK_STORAGE_KEY);
  return JSON.parse(result);
};
export function getDeck(){}
export function addDeck(){
  return getDecks().then(decks => {
    decks.push({"title": title, "questions": []});
    return AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(decks));
});
}
export function addCardToDeck(){}
