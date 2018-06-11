const search = `query getPois($categories: [ID], $amenities: [ID], $pattern: String!) {
  allPois(filter: {
    category: {in: $categories} ,
    amenities: {anyIn: $amenities},
    name: {matches: {pattern: $pattern, caseSensitive: false}}
   }) {
    id
    name
    when
    verified
    coverImage {
      url
    }
    updatedAt
    rating
    images: imageGallery {
      url
    }
    address
    location {
      latitude
      longitude
    }
    category {
      id
      name
    }
    amenities{
      id
      name
    }
  }
 }`;

const site = `{
  site: _site {
    globalSeo {
      facebookPageUrl
      siteName
      titleSuffix
      twitterAccount
      fallbackSeo {
        description
        title
        image {
          url
        }
      }
    }
    favicons: faviconMetaTags {
      attributes
      tag
      content
    }
  }
}`;

const amenities = `{
  allAmenities {
    id
    name
  }
}`;

const categories = `{
  allCategories {
    id
    name
  }
}`;

const detail = `query getDetail($id: ID) {
  detail: allPois(
    filter: {
      id: { eq: $id }
    }) {
    id
    name
    overview
    rating
    verified
    images: imageGallery {
      url
    }
    address
    location {
      latitude
      longitude
    }
    amenities{
      id
      name
    }
    openingHours {
      monday
      tuesday
      wednesday
      thursday
      friday
      saturday
      sunday
    }
    owner {
      phoneNumber
      id
      fullName
      emailAddress
      facebookProfilePage
      twitterProfilePage
      image {
        url
      }
    }
    menu {
      id
      name
      price
      description
      category {
        name
      }
    }
    updatedAt
    category {
      id
      name
    }
    meta: _seoMetaTags {
      tag
      content
      attributes
    }
  }
}`;

const list = `{
  allPois(orderBy: updatedAt_DESC) {
    id
    name
    when
    verified
    coverImage{
      url
    }
    updatedAt
    rating
    images: imageGallery {
      url
    }
    address
    location {
      latitude
      longitude
    }
    category {
      id
      name
    }
    amenities{
      id
      name
    }
    meta: _seoMetaTags {
      tag
      content
      attributes
    }
  }
}
`;

export default { site, list, detail, categories, amenities, search };
