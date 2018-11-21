import get from 'lodash/get';

export default class Offer {
  constructor(data) {
    this.id = get(data, 'id');
    this.name = get(data, 'vehicleGroupInfo.modelExample.name');
    this.image = get(data, 'vehicleGroupInfo.modelExample.imageUrl');
    this.price = get(data, 'prices.totalPrice.amount');
    this.sort = get(data, 'sortIndexes');
  }
}
