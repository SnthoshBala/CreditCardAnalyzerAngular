export interface CustomerSend {
    file: any;
}

export class DayData {
    date: string = '';
    activity: string = '';
    rewards_points: string = '';
    amount_spent: string = '';
};

export class Item {
    _id: number = 0;
    customerName: string = '';
    customerAccNumber: string = '';
    customerCreditPurchase: DayData[] = [];
}