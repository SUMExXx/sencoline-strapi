import type { Schema, Struct } from '@strapi/strapi';

export interface SharedBlogSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_blog_sections';
  info: {
    displayName: 'blogSection';
  };
  attributes: {
    number: Schema.Attribute.Decimal;
    subSections: Schema.Attribute.Component<'shared.section-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedListItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_list_items';
  info: {
    displayName: 'listItem';
    icon: 'bulletList';
  };
  attributes: {
    number: Schema.Attribute.Decimal;
    text: Schema.Attribute.Text;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSectionItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_section_items';
  info: {
    displayName: 'subSection';
  };
  attributes: {
    list: Schema.Attribute.Component<'shared.list-item', true>;
    number: Schema.Attribute.Decimal;
    texts: Schema.Attribute.Component<'shared.text', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedText extends Struct.ComponentSchema {
  collectionName: 'components_shared_texts';
  info: {
    displayName: 'Text';
    icon: 'stack';
  };
  attributes: {
    text: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.blog-section': SharedBlogSection;
      'shared.list-item': SharedListItem;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.section-item': SharedSectionItem;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.text': SharedText;
    }
  }
}
