import type { Schema, Attribute } from '@strapi/strapi';

export interface CvEducation extends Schema.Component {
  collectionName: 'components_education_educations';
  info: {
    displayName: 'education';
    description: '';
  };
  attributes: {
    type: Attribute.String;
    location: Attribute.String;
    date: Attribute.String;
    description: Attribute.Text;
  };
}

export interface CvInterests extends Schema.Component {
  collectionName: 'components_interests_interests';
  info: {
    displayName: 'interests';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
  };
}

export interface CvSkillName extends Schema.Component {
  collectionName: 'components_skill_name_skill_names';
  info: {
    displayName: 'skillName';
    description: '';
  };
  attributes: {
    name: Attribute.String;
  };
}

export interface CvSkills extends Schema.Component {
  collectionName: 'components_skills_skills';
  info: {
    displayName: 'skills';
    description: '';
  };
  attributes: {
    skillName: Attribute.Component<'cv.skill-name', true>;
    name: Attribute.String;
  };
}

export interface CvTimeline extends Schema.Component {
  collectionName: 'components_timeline_timelines';
  info: {
    displayName: 'timeline';
    description: '';
  };
  attributes: {
    role: Attribute.String;
    company: Attribute.String;
    location: Attribute.String;
    description: Attribute.Text;
    longDescription: Attribute.RichText;
    tags: Attribute.String;
    url: Attribute.String;
    startDate: Attribute.Date;
    endDate: Attribute.Date;
    logo: Attribute.Media;
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

export interface SocialsSocials extends Schema.Component {
  collectionName: 'components_socials_socials';
  info: {
    displayName: 'socials';
    description: '';
  };
  attributes: {
    name: Attribute.Enumeration<['Linkedin', 'GitHub', 'Twitter', 'Instagram']>;
    link: Attribute.String;
  };
}

export interface SyndicationLinksSyndicationLinks extends Schema.Component {
  collectionName: 'components_syndication_links_syndication_links';
  info: {
    displayName: 'syndicationLinks';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    slug: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'cv.education': CvEducation;
      'cv.interests': CvInterests;
      'cv.skill-name': CvSkillName;
      'cv.skills': CvSkills;
      'cv.timeline': CvTimeline;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
      'socials.socials': SocialsSocials;
      'syndication-links.syndication-links': SyndicationLinksSyndicationLinks;
    }
  }
}
