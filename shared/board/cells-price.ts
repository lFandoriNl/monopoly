type CompanyPrice = {
  type: 'Company';
  rent0: number;
  rent1: number;
  rent2: number;
  rent3: number;
  rent4: number;
  rent5: number;
  cost: number;
  pledge: number;
  redemption: number;
  branch: number;
};

type SumCompanyPrice = {
  type: 'SumCompany';
  field1: number;
  field2: number;
  field3: number;
  field4: number;
  cost: number;
  pledge: number;
  redemption: number;
};

type DiceSumCompanyPrice = {
  type: 'DiceSumCompany';
  field1: number;
  field2: number;
  cost: number;
  pledge: number;
  redemption: number;
};

export type CellsPriceData = {
  [key: number]: CompanyPrice | SumCompanyPrice | DiceSumCompanyPrice;
};
