import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { useState } from 'react';
// material
import { Box, Card, Link, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

// utils
import { fCurrency } from '../../../utils/formatNumber';
// components

// ----------------------------------------------------------------------

const ProductImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'contain',
  position: 'absolute',
});

// ----------------------------------------------------------------------

ShopProductCard.propTypes = {
  product: PropTypes.object,
  setCartValue: PropTypes.any,
  cartValue: PropTypes.number,
};

export default function ShopProductCard({ setCartValue, cartValue, product }) {
  const { name, imgURI, price } = product;

  const [buttonState, setButtonState] = useState(true);
  const [buttonText, setButtonText] = useState(true);

  const changeBtnState = () => {
    if (buttonState) {
      setCartValue(cartValue + 1);
    } else {
      setCartValue(cartValue - 1);
    }
    setButtonState(!buttonState);
    setButtonText(!buttonText);
  };

  return (
    <Card>
      <Box sx={{ pt: '100%', position: 'relative' }}>
        <ProductImgStyle alt={name} src={imgURI} />
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Link to="#" color="inherit" underline="hover" component={RouterLink}>
          <Typography variant="subtitle2" noWrap>
            {name}
          </Typography>
        </Link>

        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="subtitle1">
            &nbsp;
            {fCurrency(price)}
          </Typography>

          <Button variant={buttonState ? 'outlined' : 'contained'} onClick={changeBtnState}>
            {buttonState ? 'Add to cart' : 'Remove '}
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
}
