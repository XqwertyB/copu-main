import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import styles from './style.module.scss';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function ItemMenu({ options, index, item }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const router = useRouter();
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    if (item.link) {
      router.push(item.link);
    }
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.menu}>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className={`${styles.buttonMenu} ${open && options ? styles.active : ''}`}
      >
        {index}
      </Button>
      {
        options && (
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            {
              options.map((children, index) => (
                <Link href={children.link} key={index}>
                  <MenuItem onClick={handleClose}>{children.title}</MenuItem>
                </Link>
              ))
            }
          </Menu>
        )
      }
    </div>
  );
}