interface Date {
  addDays: (days: number) => Date;
}

//to fix error that when I want to add function (addDays) to Date.prototype, happen.
