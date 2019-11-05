/**
 *
 * Box
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import {
  BoxItem,
  BoxChanges,
  BoxDescription,
  DescriptionContainer,
  BoxImage,
  BoxText,
  Name,
} from './styledComponents';

function Box(props) {
  const { image, name, description } = props;
  return (
    <BoxItem image={image}>
      <BoxChanges>
        <BoxImage>
          <img src={image} alt={name} />
        </BoxImage>
        <BoxDescription>
          <DescriptionContainer>
            <p>{description}</p>
          </DescriptionContainer>
        </BoxDescription>
      </BoxChanges>
      <BoxText>
        <Name>{name}</Name>
      </BoxText>
    </BoxItem>
  );
}

Box.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Box;
