import type { Schema, Attribute } from '@strapi/strapi';

export interface GlobalFooter extends Schema.Component {
  collectionName: 'components_global_footers';
  info: {
    displayName: 'Footer';
    icon: 'collapse';
    description: '';
  };
  attributes: {
    ContactBar: Attribute.Component<'shared.contact-bar'>;
    footerBrand: Attribute.Component<'shared.footer-brand'>;
    footerAreas: Attribute.Component<'shared.footer-areas', true>;
  };
}

export interface GlobalNavbar extends Schema.Component {
  collectionName: 'components_global_navbars';
  info: {
    displayName: 'Navbar';
    icon: 'layer';
    description: '';
  };
  attributes: {
    links: Attribute.Component<'shared.links', true>;
    Logo: Attribute.Media;
    NavTitle: Attribute.String;
    LoginTitle: Attribute.String;
    SecNavTitle: Attribute.String;
  };
}

export interface GlobalSaleChannel extends Schema.Component {
  collectionName: 'components_global_sale_channels';
  info: {
    displayName: 'SaleChannel';
    icon: 'key';
  };
  attributes: {
    channel: Attribute.Enumeration<
      ['Samosa', 'Rodosa', 'Midilliye', 'Kosa', 'Meise', 'Sak\u0131za']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'Samosa'>;
  };
}

export interface GlobalTopMenu extends Schema.Component {
  collectionName: 'components_global_top_menus';
  info: {
    displayName: 'TopMenu';
    icon: 'filter';
  };
  attributes: {
    title: Attribute.String;
    links: Attribute.Component<'shared.links', true>;
  };
}

export interface HomePageCardSplide extends Schema.Component {
  collectionName: 'components_home_page_card_splides';
  info: {
    displayName: 'CardSplide';
    icon: 'cube';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    Ferry: Attribute.Component<'shared.ferries', true>;
  };
}

export interface HomePageCategories extends Schema.Component {
  collectionName: 'components_home_page_categories';
  info: {
    displayName: 'Categories';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    items: Attribute.Component<'shared.categories-item', true>;
    subElement: Attribute.String;
    subRouter: Attribute.String;
    subRouterUrl: Attribute.String;
  };
}

export interface HomePageHomePage extends Schema.Component {
  collectionName: 'components_home_page_home_pages';
  info: {
    displayName: 'Slider';
    icon: 'slideshow';
    description: '';
  };
  attributes: {
    img: Attribute.Media & Attribute.Required;
    title: Attribute.String;
    subtitle: Attribute.String;
    price: Attribute.String;
    btnText: Attribute.String;
    btnLink: Attribute.String;
    search: Attribute.Component<'shared.search-bar'>;
  };
}

export interface HomePageTitleCard extends Schema.Component {
  collectionName: 'components_home_page_title_cards';
  info: {
    displayName: 'TitleCard';
    icon: 'cube';
    description: '';
  };
  attributes: {
    campaignTitle: Attribute.String;
    company: Attribute.String;
    buttonText: Attribute.String;
    visaTitle: Attribute.String;
    visaDescription: Attribute.String;
    toursTitle: Attribute.String;
    toursDescription: Attribute.String;
    toursButtonText: Attribute.String;
    toursImage: Attribute.Media & Attribute.Required;
    campaignImage: Attribute.Media;
  };
}

export interface HomePageTourCard extends Schema.Component {
  collectionName: 'components_home_page_tour_cards';
  info: {
    displayName: 'TourCard';
    icon: 'cube';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    btnText: Attribute.String;
    btnLink: Attribute.String;
    Tours: Attribute.Component<'shared.tours', true> & Attribute.Required;
  };
}

export interface JourneyPageJourneyPage extends Schema.Component {
  collectionName: 'components_journey_page_journey_pages';
  info: {
    displayName: 'Journey-page';
  };
  attributes: {
    notes: Attribute.Component<'shared.sub-item', true>;
    journeyTable: Attribute.Component<'shared.table'>;
  };
}

export interface PassengerPageChangePassengerChangeModal
  extends Schema.Component {
  collectionName: 'components_passenger_page_change_passenger_change_modals';
  info: {
    displayName: 'ChangePassengerChangeModal';
    description: '';
  };
  attributes: {
    ConfirmBtn: Attribute.String;
    CancelBtn: Attribute.String;
    text: Attribute.RichText;
  };
}

export interface PassengerPagePassengerDetail extends Schema.Component {
  collectionName: 'components_passenger_page_passenger_details';
  info: {
    displayName: 'PassengerDetail';
    description: '';
  };
  attributes: {
    passengerInformation: Attribute.String;
    addPassenger: Attribute.String;
    passengerType: Attribute.Component<'passenger-page.passenger-type', true>;
    passengers: Attribute.Component<'passenger-page.passengers', true>;
    note: Attribute.String;
    supportBtn: Attribute.String;
    billingBtn: Attribute.String;
    requiredField: Attribute.String;
  };
}

export interface PassengerPagePassengerPage extends Schema.Component {
  collectionName: 'components_passenger_page_passenger_pages';
  info: {
    displayName: 'PassengerHeader';
    description: '';
  };
  attributes: {
    searchTicket: Attribute.String;
    cost: Attribute.String;
  };
}

export interface PassengerPagePassengerType extends Schema.Component {
  collectionName: 'components_passenger_page_passenger_types';
  info: {
    displayName: 'PassengerType';
    description: '';
  };
  attributes: {
    type: Attribute.String;
    age: Attribute.String;
    typeId: Attribute.Integer;
  };
}

export interface PassengerPagePassengers extends Schema.Component {
  collectionName: 'components_passenger_page_passengers';
  info: {
    displayName: 'Passengers';
  };
  attributes: {
    type: Attribute.String;
    updateInformation: Attribute.String;
    name: Attribute.String;
    surname: Attribute.String;
    email: Attribute.String;
    phone: Attribute.String;
    birth: Attribute.String;
    nation: Attribute.String;
    passport: Attribute.String;
    passenderId: Attribute.String;
    mailPassenger: Attribute.String;
    clear: Attribute.String;
    save: Attribute.String;
  };
}

export interface PricePagePricePage extends Schema.Component {
  collectionName: 'components_price_page_price_pages';
  info: {
    displayName: 'PriceTable';
    description: '';
  };
  attributes: {
    whichFerry: Attribute.String;
    PriceTable: Attribute.Component<'shared.table', true>;
  };
}

export interface SharedAlertModal extends Schema.Component {
  collectionName: 'components_shared_alert_modals';
  info: {
    displayName: 'AlertModal';
  };
  attributes: {
    text: Attribute.String;
    ConfirmBtn: Attribute.String;
    CancelBtn: Attribute.String;
  };
}

export interface SharedCategoriesItem extends Schema.Component {
  collectionName: 'components_shared_categories_items';
  info: {
    displayName: 'CategoriesItem';
  };
  attributes: {
    title: Attribute.String;
    img: Attribute.Media;
  };
}

export interface SharedContactBar extends Schema.Component {
  collectionName: 'components_shared_contact_bars';
  info: {
    displayName: 'ContactBar';
    icon: 'phone';
  };
  attributes: {
    title: Attribute.String;
    btnLabel: Attribute.String;
    btnHref: Attribute.String;
  };
}

export interface SharedDynamicSubItem extends Schema.Component {
  collectionName: 'components_shared_dynamic_sub_items';
  info: {
    displayName: 'dynamicSubItem';
  };
  attributes: {
    item: Attribute.Component<'shared.sub-item', true>;
  };
}

export interface SharedFerries extends Schema.Component {
  collectionName: 'components_shared_ferries';
  info: {
    displayName: 'Ferries';
    icon: 'cube';
  };
  attributes: {
    title: Attribute.String;
    where: Attribute.String;
    img: Attribute.Media & Attribute.Required;
    price: Attribute.String;
    date: Attribute.Date;
    dateText: Attribute.String;
  };
}

export interface SharedFerryTicket extends Schema.Component {
  collectionName: 'components_shared_ferry_tickets';
  info: {
    displayName: 'FerryTicket';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    from: Attribute.String;
    to: Attribute.String;
    ticketType: Attribute.String;
    roundtrip: Attribute.String;
    passengers: Attribute.String;
    date: Attribute.String;
    PassengerType: Attribute.Component<'shared.passenger-type', true>;
    choosePerson: Attribute.String;
    submitBtn: Attribute.String;
  };
}

export interface SharedFooterAreas extends Schema.Component {
  collectionName: 'components_shared_footer_areas';
  info: {
    displayName: 'FooterAreas';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subItem: Attribute.Component<'shared.sub-item', true>;
  };
}

export interface SharedFooterBrand extends Schema.Component {
  collectionName: 'components_shared_footer_brands';
  info: {
    displayName: 'FooterBrand';
    icon: 'cube';
    description: '';
  };
  attributes: {
    logo: Attribute.Media;
    title: Attribute.String;
    copyright: Attribute.String;
    slogan: Attribute.Text;
  };
}

export interface SharedLinks extends Schema.Component {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'links';
    icon: 'link';
  };
  attributes: {
    href: Attribute.String;
    label: Attribute.String;
    target: Attribute.Enumeration<['_blank']>;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface SharedPassengerType extends Schema.Component {
  collectionName: 'components_shared_passenger_types';
  info: {
    displayName: 'PassengerType';
    description: '';
  };
  attributes: {
    TypeName: Attribute.String;
  };
}

export interface SharedRows extends Schema.Component {
  collectionName: 'components_shared_rows';
  info: {
    displayName: 'rows';
  };
  attributes: {
    row: Attribute.Component<'shared.sub-item', true>;
  };
}

export interface SharedSearchBar extends Schema.Component {
  collectionName: 'components_shared_search_bars';
  info: {
    displayName: 'SearchBar';
    icon: 'search';
    description: '';
  };
  attributes: {
    SearchFerryTicket: Attribute.Component<'shared.ferry-ticket'>;
    SearchReservation: Attribute.Component<'shared.search-reservation'>;
  };
}

export interface SharedSearchReservation extends Schema.Component {
  collectionName: 'components_shared_search_reservations';
  info: {
    displayName: 'SearchReservation';
    icon: 'search';
  };
  attributes: {
    reservationNo: Attribute.String;
    passengerName: Attribute.String;
  };
}

export interface SharedSubItem extends Schema.Component {
  collectionName: 'components_shared_sub_items';
  info: {
    displayName: 'subItem';
    icon: 'filter';
  };
  attributes: {
    text: Attribute.String;
  };
}

export interface SharedTable extends Schema.Component {
  collectionName: 'components_shared_tables';
  info: {
    displayName: 'Table';
    description: '';
  };
  attributes: {
    tableTitle: Attribute.String;
    headers: Attribute.Component<'shared.sub-item', true>;
    rows: Attribute.Component<'shared.rows', true>;
  };
}

export interface SharedTours extends Schema.Component {
  collectionName: 'components_shared_tours';
  info: {
    displayName: 'Tours';
    icon: 'cube';
  };
  attributes: {
    img: Attribute.Media;
    duration: Attribute.String;
    description: Attribute.String;
    price: Attribute.String;
  };
}

export interface TicketPageTicketsHeader extends Schema.Component {
  collectionName: 'components_ticket_page_tickets_headers';
  info: {
    displayName: 'TicketsHeader';
  };
  attributes: {
    searchTicket: Attribute.String;
    paid: Attribute.String;
  };
}

export interface TicketPageTicketsList extends Schema.Component {
  collectionName: 'components_ticket_page_tickets_lists';
  info: {
    displayName: 'TicketsList';
    description: '';
  };
  attributes: {
    companyName: Attribute.String;
    departure: Attribute.String;
    arrival: Attribute.String;
    selectBtnText: Attribute.String;
    more: Attribute.String;
    continue: Attribute.String;
    changeSelection: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'global.footer': GlobalFooter;
      'global.navbar': GlobalNavbar;
      'global.sale-channel': GlobalSaleChannel;
      'global.top-menu': GlobalTopMenu;
      'home-page.card-splide': HomePageCardSplide;
      'home-page.categories': HomePageCategories;
      'home-page.home-page': HomePageHomePage;
      'home-page.title-card': HomePageTitleCard;
      'home-page.tour-card': HomePageTourCard;
      'journey-page.journey-page': JourneyPageJourneyPage;
      'passenger-page.change-passenger-change-modal': PassengerPageChangePassengerChangeModal;
      'passenger-page.passenger-detail': PassengerPagePassengerDetail;
      'passenger-page.passenger-page': PassengerPagePassengerPage;
      'passenger-page.passenger-type': PassengerPagePassengerType;
      'passenger-page.passengers': PassengerPagePassengers;
      'price-page.price-page': PricePagePricePage;
      'shared.alert-modal': SharedAlertModal;
      'shared.categories-item': SharedCategoriesItem;
      'shared.contact-bar': SharedContactBar;
      'shared.dynamic-sub-item': SharedDynamicSubItem;
      'shared.ferries': SharedFerries;
      'shared.ferry-ticket': SharedFerryTicket;
      'shared.footer-areas': SharedFooterAreas;
      'shared.footer-brand': SharedFooterBrand;
      'shared.links': SharedLinks;
      'shared.passenger-type': SharedPassengerType;
      'shared.rows': SharedRows;
      'shared.search-bar': SharedSearchBar;
      'shared.search-reservation': SharedSearchReservation;
      'shared.sub-item': SharedSubItem;
      'shared.table': SharedTable;
      'shared.tours': SharedTours;
      'ticket-page.tickets-header': TicketPageTicketsHeader;
      'ticket-page.tickets-list': TicketPageTicketsList;
    }
  }
}
