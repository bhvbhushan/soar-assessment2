import { Avatar, Box } from '@mui/material';
import { StyledBadge } from '_styledComponents';
import React, { ChangeEvent, useRef, useState } from 'react';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

interface avatarEditProps {
  currentAvatarUrl?: string;
  size?: number;
}

const EditAvatar: React.FC<avatarEditProps> = ({
  currentAvatarUrl,

  size = '5rem',
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | undefined>(currentAvatarUrl);

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Optional: Validate file type and size here
      if (!file.type.startsWith('image/')) {
        alert('Please select a valid image file.');
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        // 5MB limit
        alert('File size exceeds 5MB.');
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <Box sx={{ mr: '2rem' }}>
      <StyledBadge
        overlap="circular"
        color="primary"
        onClick={handleAvatarClick}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        badgeContent={
          <ModeEditOutlineIcon sx={{ color: 'white', fontSize: '0.8rem' }} />
        }
      >
        <Avatar
          alt="Travis Howard"
          src={preview}
          sx={{ width: size, height: size }}
        >
          {!preview && <PhotoCamera fontSize="large" />}
        </Avatar>
      </StyledBadge>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
    </Box>
  );
};

export default EditAvatar;
