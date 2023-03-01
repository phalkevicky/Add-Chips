import CheckIcon from '@mui/icons-material/Check';
import Box from '@mui/joy/Box';
import Checkbox from '@mui/joy/Checkbox';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';
import * as React from 'react';

export default function CheckboxChip() {
  const [data,setData] = React.useState([
    'Star trek',
    'Batman',
    'Spider man',
    'Eternals',
    'Shang chi',
    'Jungle cruise',
    'No time to die',
    'Thor',
    'The hulk',
  ]);
  const [selected, setSelected] = React.useState([]);
  console.log('se', selected);
  return (
    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
      <Box>
        <Typography fontWeight="md" fontSize="lg" id="fav-movie" mb={2}>
          Favorite Movies
        </Typography>
        <Box
          role="group"
          aria-labelledby="fav-movie"
          sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}
        >
          {data.map((name) => {
            const checked = selected.includes(name);
            return (
              <Chip
                key={name}
                variant={checked ? 'soft' : 'plain'}
                color={checked ? 'primary' : 'neutral'}
                startDecorator={
                  checked && (
                    <CheckIcon sx={{ zIndex: 1, pointerEvents: 'none' }} />
                  )
                }
              >
                <Checkbox
                  variant="outlined"
                  color={checked ? 'primary' : 'neutral'}
                  disableIcon
                  overlay
                  label={name}
                  checked={checked}
                  onChange={(event) => {
                    setSelected((names) =>
                      event.target.checked && (  selected.length !== 2 )
                        ? [...names, name]
                        :  names.filter((n) => n !== name)
                    );
                  }}
                />
              </Chip>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
