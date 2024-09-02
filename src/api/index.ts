const recentTransactions: any[] = [
    'Sent 50$ to Mom',
    'Sent 30$ to Brother',
    'Received 200$ from Dad',
    'Sent 100$ to Wife',
];

const activeLocks: any[] = [
    '100$ for 15 days',
    '20$ for 12 days',
    '30$ for 18 days',
    '40$ for 4 days',
];

export default {

    /**
     * GET: get  recent transactions
     */
    getRecentTransactions(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve({
                data: recentTransactions,
            });
        });
    },

    /**
     * GET: get  recent transactions
     */
    getActiveLocks(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve({
                data: activeLocks,
            });
        });
    }
}
