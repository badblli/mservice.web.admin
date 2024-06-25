import type { Schema, Attribute } from '@strapi/strapi';

export interface BlogCategoriesCategories extends Schema.Component {
  collectionName: 'components_blog_categories_categories';
  info: {
    displayName: 'categories';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    title: Attribute.String;
    categoryID: Attribute.Integer;
  };
}

export interface BlogPageBlogCard extends Schema.Component {
  collectionName: 'components_blog_page_blog_cards';
  info: {
    displayName: 'BlogCard';
    description: '';
  };
  attributes: {
    blogs: Attribute.Relation<
      'blog-page.blog-card',
      'oneToMany',
      'api::blog.blog'
    >;
  };
}

export interface BlogPageBlogPage extends Schema.Component {
  collectionName: 'components_blog_page_blog_pages';
  info: {
    displayName: 'categories';
    description: '';
  };
  attributes: {
    items: Attribute.Component<'blog-categories.categories', true>;
  };
}

export interface BlogPageCategories extends Schema.Component {
  collectionName: 'components_blog_page_categories';
  info: {
    displayName: 'BlogCategories';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    title: Attribute.String;
    categoryID: Attribute.Integer;
  };
}

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
    hamburgerMenu: Attribute.Component<'shared.links', true>;
  };
}

export interface GlobalPopUp extends Schema.Component {
  collectionName: 'components_global_pop_ups';
  info: {
    displayName: 'PopUp';
    icon: 'landscape';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    fullImage: Attribute.Boolean;
    title: Attribute.Blocks;
    subtitle: Attribute.Blocks;
    description: Attribute.Blocks;
    url: Attribute.String;
  };
}

export interface GlobalSaleChannel extends Schema.Component {
  collectionName: 'components_global_sale_channels';
  info: {
    displayName: 'SaleChannel';
    icon: 'key';
    description: '';
  };
  attributes: {
    channel: Attribute.Enumeration<
      [
        'Samosa',
        'Rodosa',
        'Midilliye',
        'Kosa',
        'Meise',
        'Sak\u0131za',
        'Meander'
      ]
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

export interface IslandPageAddIsland extends Schema.Component {
  collectionName: 'components_island_page_add_islands';
  info: {
    displayName: 'AddIsland';
  };
  attributes: {
    SubSaleChannel: Attribute.String;
    SubSaleChannelID: Attribute.Integer;
    IslandDetails: Attribute.Component<'island-page.island-detail', true>;
  };
}

export interface IslandPageAddTourDetail extends Schema.Component {
  collectionName: 'components_island_page_add_tour_details';
  info: {
    displayName: 'AddTourDetail';
  };
  attributes: {
    img: Attribute.Media & Attribute.Required;
    title: Attribute.String;
  };
}

export interface IslandPageIslandDetail extends Schema.Component {
  collectionName: 'components_island_page_island_details';
  info: {
    displayName: 'IslandDetail';
  };
  attributes: {
    title: Attribute.String;
    contentTitle: Attribute.String;
    from: Attribute.String;
    to: Attribute.String;
    description: Attribute.Blocks;
  };
}

export interface IslandPageIslands extends Schema.Component {
  collectionName: 'components_island_page_islands';
  info: {
    displayName: 'Islands';
  };
  attributes: {
    AddIsland: Attribute.Component<'island-page.add-island', true>;
  };
}

export interface IslandPageTourDetailSection extends Schema.Component {
  collectionName: 'components_island_page_tour_detail_sections';
  info: {
    displayName: 'TourDetailSection';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    tourDetails: Attribute.Component<'island-page.add-tour-detail', true>;
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

export interface PaymentPageInvoiceTab extends Schema.Component {
  collectionName: 'components_payment_page_invoice_tabs';
  info: {
    displayName: 'InvoiceTab';
    description: '';
  };
  attributes: {
    tabTitle: Attribute.String;
    subTitle: Attribute.String;
    description: Attribute.String;
    newInvoiceBtn: Attribute.String;
    name: Attribute.String;
    surname: Attribute.String;
    email: Attribute.String;
    identity: Attribute.String;
    phone: Attribute.String;
    address: Attribute.String;
    company: Attribute.String;
    taxNumber: Attribute.String;
    taxOffice: Attribute.String;
    saveBtn: Attribute.String;
    requiredField: Attribute.String;
  };
}

export interface PaymentPagePaymentDetail extends Schema.Component {
  collectionName: 'components_payment_page_payment_details';
  info: {
    displayName: 'PaymentDetail';
    description: '';
  };
  attributes: {
    InvoiceTab: Attribute.Component<'payment-page.invoice-tab', true>;
    PaymentTab: Attribute.Component<'payment-page.payment-tab', true>;
    InvoiceTabTopTitle: Attribute.String;
    PaymentTopTitle: Attribute.String;
    PaymentSummary: Attribute.Component<'payment-page.payment-summary'>;
  };
}

export interface PaymentPagePaymentHeader extends Schema.Component {
  collectionName: 'components_payment_page_payment_headers';
  info: {
    displayName: 'PaymentHeader';
  };
  attributes: {
    title: Attribute.String;
    cost: Attribute.String;
  };
}

export interface PaymentPagePaymentSuccess extends Schema.Component {
  collectionName: 'components_payment_page_payment_successes';
  info: {
    displayName: 'PaymentSuccess';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    reservationNo: Attribute.String;
    earnedMiles: Attribute.String;
    point: Attribute.String;
    addWallet: Attribute.String;
    downloadTicket: Attribute.String;
    sendPrinter: Attribute.String;
    goBackHome: Attribute.String;
    goMyReservation: Attribute.String;
  };
}

export interface PaymentPagePaymentSummary extends Schema.Component {
  collectionName: 'components_payment_page_payment_summaries';
  info: {
    displayName: 'PaymentSummary';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    adultPassenger: Attribute.String;
    childPassenger: Attribute.String;
    babyPassenger: Attribute.String;
    departureDate: Attribute.String;
    destinationDate: Attribute.String;
    departurePort: Attribute.String;
    destinationPort: Attribute.String;
    EarnedMilePoints: Attribute.String;
    myMiles: Attribute.String;
    useIt: Attribute.String;
    cancelAndRefund: Attribute.String;
    totalPayment: Attribute.String;
    kdv: Attribute.String;
    createAcc: Attribute.String;
    payBtn: Attribute.String;
    passengerInformation: Attribute.String;
    payDescription: Attribute.String;
  };
}

export interface PaymentPagePaymentTab extends Schema.Component {
  collectionName: 'components_payment_page_payment_tabs';
  info: {
    displayName: 'PaymentTab';
    description: '';
  };
  attributes: {
    tabTitle: Attribute.String;
    description: Attribute.String;
    creditCardNo: Attribute.String;
    creditCardName: Attribute.String;
    lastUseDate: Attribute.String;
    dayMonth: Attribute.String;
    cvv: Attribute.String;
    threeDigitCode: Attribute.String;
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

export interface SharedBlogCard extends Schema.Component {
  collectionName: 'components_shared_blog_cards';
  info: {
    displayName: 'BlogCards';
    description: '';
  };
  attributes: {
    BlogCard: Attribute.Component<'shared.card-blog', true>;
    more: Attribute.String;
  };
}

export interface SharedCardBlog extends Schema.Component {
  collectionName: 'components_shared_card_blogs';
  info: {
    displayName: 'cardBlog';
  };
  attributes: {
    img: Attribute.Media;
    title: Attribute.String;
    description: Attribute.Blocks;
    locationTitle: Attribute.String;
    location: Attribute.String;
    btnText: Attribute.String;
    btnLink: Attribute.String;
  };
}

export interface SharedCard extends Schema.Component {
  collectionName: 'components_shared_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    iamge: Attribute.Media & Attribute.Required;
    title: Attribute.String;
    subtitle: Attribute.String;
    blogID: Attribute.Integer;
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

export interface SharedCategoryQuestion extends Schema.Component {
  collectionName: 'components_shared_category_question';
  info: {
    displayName: 'CategoryQuestion';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface SharedCategoryQuestions extends Schema.Component {
  collectionName: 'components_shared_category_questions';
  info: {
    displayName: 'CategoryQuestions';
    description: '';
  };
  attributes: {
    CategoryQuestion: Attribute.Component<'shared.category-question', true>;
    category: Attribute.String;
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

export interface SharedHeader extends Schema.Component {
  collectionName: 'components_shared_headers';
  info: {
    displayName: 'Header';
    description: '';
  };
  attributes: {
    slug: Attribute.Component<'shared.slug', true>;
    title: Attribute.String;
  };
}

export interface SharedImages extends Schema.Component {
  collectionName: 'components_shared_images';
  info: {
    displayName: 'Images';
    icon: 'expand';
  };
  attributes: {
    images: Attribute.Media;
  };
}

export interface SharedIslandTours extends Schema.Component {
  collectionName: 'components_shared_island_tours';
  info: {
    displayName: 'IslandTours';
  };
  attributes: {
    Tours: Attribute.Component<'shared.tours', true>;
    title: Attribute.String;
    subtitle: Attribute.String;
    btnText: Attribute.String;
    btnLink: Attribute.String;
  };
}

export interface SharedLinks extends Schema.Component {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'links';
    icon: 'link';
    description: '';
  };
  attributes: {
    href: Attribute.String;
    label: Attribute.String;
    target: Attribute.Enumeration<['_blank']>;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
    subSaleChannelID: Attribute.Integer;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
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
    description: '';
  };
  attributes: {
    reservationNo: Attribute.String;
    passengerName: Attribute.String;
    searchReservation: Attribute.String;
    searchPNR: Attribute.String;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

export interface SharedSlug extends Schema.Component {
  collectionName: 'components_shared_slugs';
  info: {
    displayName: 'slug';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    href: Attribute.String;
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

export interface SharedTabContent extends Schema.Component {
  collectionName: 'components_shared_tab_contents';
  info: {
    displayName: 'TabContent';
  };
  attributes: {
    Tab: Attribute.Component<'shared.tab', true>;
  };
}

export interface SharedTab extends Schema.Component {
  collectionName: 'components_shared_tabs';
  info: {
    displayName: 'Tab';
    icon: 'stack';
    description: '';
  };
  attributes: {
    tabs: Attribute.Relation<'shared.tab', 'oneToMany', 'api::tab.tab'>;
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
    description: '';
  };
  attributes: {
    img: Attribute.Media;
    duration: Attribute.String;
    description: Attribute.String;
    price: Attribute.String;
  };
}

export interface SharedYoutubeArea extends Schema.Component {
  collectionName: 'components_shared_youtube_areas';
  info: {
    displayName: 'YoutubeArea';
  };
  attributes: {
    title: Attribute.String;
    goYoutubeText: Attribute.String;
    goYoutubeLink: Attribute.String;
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
      'blog-categories.categories': BlogCategoriesCategories;
      'blog-page.blog-card': BlogPageBlogCard;
      'blog-page.blog-page': BlogPageBlogPage;
      'blog-page.categories': BlogPageCategories;
      'global.footer': GlobalFooter;
      'global.navbar': GlobalNavbar;
      'global.pop-up': GlobalPopUp;
      'global.sale-channel': GlobalSaleChannel;
      'global.top-menu': GlobalTopMenu;
      'home-page.card-splide': HomePageCardSplide;
      'home-page.categories': HomePageCategories;
      'home-page.home-page': HomePageHomePage;
      'home-page.title-card': HomePageTitleCard;
      'home-page.tour-card': HomePageTourCard;
      'island-page.add-island': IslandPageAddIsland;
      'island-page.add-tour-detail': IslandPageAddTourDetail;
      'island-page.island-detail': IslandPageIslandDetail;
      'island-page.islands': IslandPageIslands;
      'island-page.tour-detail-section': IslandPageTourDetailSection;
      'journey-page.journey-page': JourneyPageJourneyPage;
      'passenger-page.change-passenger-change-modal': PassengerPageChangePassengerChangeModal;
      'passenger-page.passenger-detail': PassengerPagePassengerDetail;
      'passenger-page.passenger-page': PassengerPagePassengerPage;
      'passenger-page.passenger-type': PassengerPagePassengerType;
      'passenger-page.passengers': PassengerPagePassengers;
      'payment-page.invoice-tab': PaymentPageInvoiceTab;
      'payment-page.payment-detail': PaymentPagePaymentDetail;
      'payment-page.payment-header': PaymentPagePaymentHeader;
      'payment-page.payment-success': PaymentPagePaymentSuccess;
      'payment-page.payment-summary': PaymentPagePaymentSummary;
      'payment-page.payment-tab': PaymentPagePaymentTab;
      'price-page.price-page': PricePagePricePage;
      'shared.alert-modal': SharedAlertModal;
      'shared.blog-card': SharedBlogCard;
      'shared.card-blog': SharedCardBlog;
      'shared.card': SharedCard;
      'shared.categories-item': SharedCategoriesItem;
      'shared.category-question': SharedCategoryQuestion;
      'shared.category-questions': SharedCategoryQuestions;
      'shared.contact-bar': SharedContactBar;
      'shared.dynamic-sub-item': SharedDynamicSubItem;
      'shared.ferries': SharedFerries;
      'shared.ferry-ticket': SharedFerryTicket;
      'shared.footer-areas': SharedFooterAreas;
      'shared.footer-brand': SharedFooterBrand;
      'shared.header': SharedHeader;
      'shared.images': SharedImages;
      'shared.island-tours': SharedIslandTours;
      'shared.links': SharedLinks;
      'shared.meta-social': SharedMetaSocial;
      'shared.passenger-type': SharedPassengerType;
      'shared.rows': SharedRows;
      'shared.search-bar': SharedSearchBar;
      'shared.search-reservation': SharedSearchReservation;
      'shared.seo': SharedSeo;
      'shared.slug': SharedSlug;
      'shared.sub-item': SharedSubItem;
      'shared.tab-content': SharedTabContent;
      'shared.tab': SharedTab;
      'shared.table': SharedTable;
      'shared.tours': SharedTours;
      'shared.youtube-area': SharedYoutubeArea;
      'ticket-page.tickets-header': TicketPageTicketsHeader;
      'ticket-page.tickets-list': TicketPageTicketsList;
    }
  }
}
