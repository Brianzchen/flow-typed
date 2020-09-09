// @flow

import creditCardType from 'credit-card-type';
import type {ICardType} from 'credit-card-type';

const {
  types,
  getTypeInfo,
  removeCard,
  addCard,
  changeOrder,
  resetModifications
} = creditCardType;

const customCardType: ICardType = {
  niceType: 'NewCard',
  type: 'new-card',
  prefixPattern: /^(2|23|234)$/,
  exactPattern: /^(2345)\d*$/,
  gaps: [4, 8, 12],
  lengths: [16],
  code: {
    name: 'cvv',
    size: 3
  }
};
const typesMap: {[key: string]: ICardType} = types;
const visaType: ICardType | void = types['VISA'];
const resolvedTypes: ICardType[] = creditCardType('4111111111111111');
const foundByType: ICardType | null = getTypeInfo('VISA');
const removedCard: void = removeCard('JCB');
const changedOrder: void = changeOrder('VISA', 3);
const resetValues: void = resetModifications();
const addedCard: void = addCard(customCardType);

// $FlowExpectedError
creditCardType(4111111111111111);
// $FlowExpectedError
creditCardType(null);
// $FlowExpectedError
getTypeInfo(123);
// $FlowExpectedError
getTypeInfo(null);
// $FlowExpectedError
removeCard();
// $FlowExpectedError
changeOrder(undefined, null);
// $FlowExpectedError
changeOrder('VISA');
// $FlowExpectedError
addCard({
  niceType: 'NewCard',
  type: 'new-card'
});
