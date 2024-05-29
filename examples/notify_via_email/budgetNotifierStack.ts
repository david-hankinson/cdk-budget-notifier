import { App, Stack } from 'aws-cdk-lib';

import { BudgetNotifier } from '../../src/budgetNotifier';
import { NotificationType } from '../../src/notificationType';

const app = new App();
const stack = new Stack(app, 'BudgetNotifierStack');

new BudgetNotifier(stack, 'notifier', {
  recipients: ['davidmhankinson@outlook.com'],
  // Filter on the availability zone `eu-central-1`
  availabilityZones: ['ca-central-1'],
  costCenter: 'MyCostCenter',
  // Limit and unit defining the budget limit
  limit: 10,
  unit: 'USD',
  // When breaching the threshold of 85% of the 10 USD notifications will be send out.
  threshold: 85,
  notificationType: NotificationType.FORECASTED,
  sendMonthlyEmail: true,
});

