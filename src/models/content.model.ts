export interface Contentful {
  sys: ContentfulSys;
  total: number;
  skip: number;
  limit: number;
  items: ContentfulItem[];
  includes: Includes;
}

export interface Includes {
  Asset: Asset[];
}

export interface Asset {
  metadata: Metadata;
  sys: AssetSys;
  fields: AssetFields;
}

export interface AssetFields {
  title: string;
  description: string;
  file: File;
}

export interface File {
  url: string;
  details: Details;
  fileName: string;
  contentType: ContentTypeEnum;
}

export enum ContentTypeEnum {
  ImagePNG = "image/png",
}

export interface Details {
  size: number;
  image: Image;
}

export interface Image {
  width: number;
  height: number;
}

export interface Metadata {
  tags: ContentType[];
}

export interface ContentType {
  sys: ContentTypeSys;
}

export interface ContentTypeSys {
  type: PurpleType;
  linkType: LinkType;
  id: string;
}

export enum LinkType {
  Asset = "Asset",
  ContentType = "ContentType",
  Environment = "Environment",
  Space = "Space",
  Tag = "Tag",
}

export enum PurpleType {
  Link = "Link",
}

export interface AssetSys {
  space: ContentType;
  id: string;
  type: FluffyType;
  createdAt: Date;
  updatedAt: Date;
  environment: ContentType;
  revision: number;
  locale: Locale;
  contentType?: ContentType;
}

export enum Locale {
  EnUS = "en-US",
}

export enum FluffyType {
  Asset = "Asset",
  Entry = "Entry",
}

export interface ContentfulItem {
  metadata: Metadata;
  sys: AssetSys;
  fields: ItemFields;
}

export interface ItemFields {
  headTitle?: string;
  btnDownload?: string;
  link?: Link[];
  title?: string;
  legend?: string;
  filters?: Filter[];
  boxItems?: BoxItem[];
  works?: ContentType[];
  formFields?: FormFields;
  properties?: Properties;
  infoKey?: string[];
  recommendations?: Recommendation[];
  skills?: Language[];
  languages?: Language[];
  education?: Education[];
  experience?: Education[];
  plans?: Plan[];
  titleId?: string[];
  subtitle?: string[];
  description?: Description;
  cta?: string;
  items?: FieldsItem[];
  post1?: Description;
  post2?: Description;
  infoList?: string[];
  link1?: string;
  link2?: string;
}

export interface BoxItem {
  icon: Icon;
  btnHref: string;
  btnText: BtnText;
  category: string;
  imageUrl: string;
  className: string;
  description: string;
  nameCategory: string;
}

export enum BtnText {
  ViewProject = "View Project",
}

export enum Icon {
  IconFasFaPlus = "icon fas fa-plus",
}

export interface Description {
  data: Data;
  content: DescriptionContent[];
  nodeType: string;
}

export interface DescriptionContent {
  data: Data;
  content: ContentContent[];
  nodeType: string;
}

export interface ContentContent {
  data: Data;
  marks: any[];
  value: string;
  nodeType: string;
}

export interface Data {}

export interface Education {
  date: string;
  name: string;
  place?: string;
  single_post_text: string;
}

export interface Filter {
  name: string;
  value: string;
  dataText: string;
}

export interface FormFields {
  send_btn: SendBtn;
  alert_msg: string;
  name_field: Field;
  email_field: Field;
  message_field: Field;
}

export interface Field {
  label: string;
  placeholder: string;
}

export interface SendBtn {
  icon: string;
  label: string;
}

export interface FieldsItem {
  icon: string;
  name: string;
  description: string;
}

export interface Language {
  name: string;
  icon: string;
  single_post_text: string;
}

export interface Link {
  name: string;
  link: string;
}

export interface Plan {
  cta: Cta;
  icon: string;
  name: string;
  amount: Amount;
  feature_list: FeatureList[];
}

export interface Amount {
  badge: string;
  price: string;
  period: string;
}

export interface Cta {
  icon: string;
  text: string;
  action: string;
}

export interface FeatureList {
  new: boolean;
  text: string;
  disabled: boolean;
}

export interface Properties {
  mail: string;
  name: string;
  phone: string;
  subname: string;
  freelance: string;
  residence: string;
  specialty: string;
}

export interface Recommendation {
  name: string;
  company: string;
  imageUrl: string;
  recommendation: string;
}

export interface ContentfulSys {
  type: string;
}

export interface ContactInfo {
  fields: FieldsContact;
}

export interface FieldsContact {
  title: string;
  legend: string;
  formFields: FormFieldsCI;
  properties: PropertiesCI;
  workPosition: string;
}

export interface FormFieldsCI {
  send_btn: SendBtnCI;
  alert_msg: string;
  name_field: FieldCI;
  email_field: FieldCI;
  message_field: FieldCI;
}

export interface FieldCI {
  label: string;
  placeholder: string;
}

export interface SendBtnCI {
  icon: string;
  label: string;
}

export interface PropertiesCI {
  email: PropCI;
  freelance: PropCI;
  residence: PropCI;
  specialty: PropCI;
}

export interface PropCI {
  title: string;
  value: string;
}
