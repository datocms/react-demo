const search = (cat, amenity, text) => {
  if (!cat && !amenity && !text) {
    return;
  }
  let filters = [];

  if (cat && cat.length) {
    filters.push(`category: {in: [${cat.join(",")}]}`);
  }

  // if (amenity && amenity.length) {
  //   filters.push(`amenities: {in: [${amenity.join(",")}]}`);
  // }

  if (text) {
    filters.push(`name: {matches: {pattern: "${text}", caseSensitive: false}}`);
  }

  return `{
  allPois(filter: {${filters.join(",")}}) {
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
  }
}`;
};

const site = `{
  _site {
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

const detail = id => `{
  detail: allPois(
    filter: {
      id: { eq: ${id} }
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
}
`;

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
