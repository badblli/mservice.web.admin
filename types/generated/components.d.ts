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
  };
  attributes: {
    links: Attribute.Component<'shared.links', true>;
    Logo: Attribute.Media;
    NavTitle: Attribute.String;
    LoginTitle: Attribute.String;
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
    btnText: Attribute.String;
    btnLink: Attribute.String;
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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'global.footer': GlobalFooter;
      'global.navbar': GlobalNavbar;
      'global.sale-channel': GlobalSaleChannel;
      'global.top-menu': GlobalTopMenu;
      'home-page.card-splide': HomePageCardSplide;
      'home-page.home-page': HomePageHomePage;
      'home-page.title-card': HomePageTitleCard;
      'home-page.tour-card': HomePageTourCard;
      'shared.contact-bar': SharedContactBar;
      'shared.ferries': SharedFerries;
      'shared.footer-areas': SharedFooterAreas;
      'shared.footer-brand': SharedFooterBrand;
      'shared.links': SharedLinks;
      'shared.sub-item': SharedSubItem;
      'shared.tours': SharedTours;
    }
  }
}
