export interface ProductDataTypes {
  ID: number;
  Name: string;
  Published: number;
  'Is featured?': string;
  'Visibility in catalog': VisibilityInCatalog;
  'Short description': null | string;
  Description: null | string;
  'Date sale price starts': null | string;
  'Date sale price ends': null;
  'Tax status': TaxStatus;
  'Tax class': TaxClass | null;
  'In stock?': string;
  Stock: null;
  'Low stock amount': null;
  'Backorders allowed?': string;
  'Sold individually?': string;
  'Weight (kg)': null;
  'Length (cm)': null;
  'Width (cm)': null;
  'Height (cm)': null;
  'Allow customer reviews?': number;
  'Purchase note': null;
  'Sale price': null | string;
  'Regular price': number;
  Categories: null | string;
  Tags: null;
  'Shipping class': null;
  Images: string;
  'Download limit': null;
  'Download expiry days': null;
  Parent: Parent | null;
  'Cross-sells': null;
  'External URL': null;
  'Button text': null;
  Position: string;
  'Attribute 1 name': AttributeName;
  'Attribute 1 value(s)': string;
  'Attribute 1 visible': number | null;
  'Attribute 1 global': number;
  'Meta: _et_pb_post_hide_nav': MetaEtPbPostHideNav | null;
  'Meta: _et_pb_page_layout': MetaEtPbPageLayout | null;
  'Meta: _et_pb_side_nav': MetaEtPbSideNav | null;
  'Meta: _et_pb_use_builder': null;
  'Meta: _et_pb_first_image': null;
  'Meta: _et_pb_truncate_post': null;
  'Meta: _et_pb_truncate_post_date': null;
  'Meta: _et_pb_old_content': null;
  'Attribute 1 default': null | string;
  'Attribute 2 name': AttributeName | null;
  'Attribute 2 value(s)': null | string;
  'Attribute 2 visible': null | string;
  'Attribute 2 global': null | string;
  'Attribute 2 default': Attribute2Default | null;
  'Attribute 3 name': AttributeName | null;
  'Attribute 3 value(s)': null | string;
  'Attribute 3 visible': null | string;
  'Attribute 3 global': null | string;
  'Attribute 3 default': null | string;
  reviewNumber: newProps<number>;
  SellerID: newProps<string>;
  SellerEmail: newProps<string>;
  extraInformation: newProps<string>;
  sellerWebsite: newProps<string>;
  country: newProps<string>;
  isOnSale: newProps<boolean>;
}


export type newProps<T> = null | T

export enum AttributeName {
  Brand = 'Brand',
  Color = 'Color',
  Size = 'Size',
}

export enum Attribute2Default {
  Large = 'Large',
  Medium = 'Medium',
  Yellow = 'Yellow',
}

export enum MetaEtPbPageLayout {
  EtRightSidebar = 'et_right_sidebar',
}

export enum MetaEtPbPostHideNav {
  Default = 'default',
}

export enum MetaEtPbSideNav {
  Off = 'off',
}

export enum Parent {
  ID151 = 'id:151',
  ID74 = 'id:74',
  ID89 = 'id:89',
}

export enum TaxClass {
  Parent = 'parent',
}

export enum TaxStatus {
  Taxable = 'taxable',
}

export enum VisibilityInCatalog {
  Visible = 'visible',
}

export interface uploadProduct {
  SellerID: null | string;
  SellerEmail: null | string;
  Images: string;
  Name: string;
  ShortDesc: string;
  Description: string;
  country: string;
  price: string;
  website: string;
  stock: string;
  extrainformation: string;
  salePrice: string;
  isOnSale: boolean;
}
