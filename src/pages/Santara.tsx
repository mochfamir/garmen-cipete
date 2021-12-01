import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
	Grid,
	Box,
	Card,
	CardActionArea,
	CardMedia,
	CardContent,
	Typography,
	TextField,
	CircularProgress,
	Button,
	CardActions,
	Select,
	FormControl,
	InputLabel,
	MenuItem,
	TableContainer,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
} from '@material-ui/core';

import logo from '../assets/logo.jpg';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
	'Mui-selected': {
		backgroundColor: '#4D493D',
	},
	loading: {
		color: '#4D493D !important',
	},
});

const filter = [
	{
		label: 'Dividend Yield',
		value: 'dividend_yeild',
	},
	{
		label: 'Performance',
		value: 'performance',
	},
	{
		label: 'PER',
		value: 'per',
	},
];

export const Santara = () => {
	const classes = useStyles();
	const [stocks, setStocks] = useState([]);
	const [categories, setCategories] = useState([]);
	const [displayStocks, setDisplayStocks] = useState([]);

	const [isLoading, setIsLoading] = useState(false);
	const [selectedFilter, setSelectedFilter] = useState('dividend_yeild');
	const [selectedCategory, setSelectedCategory] = useState('_');

	useEffect(() => {
		setIsLoading(true);
		axios
			.get(`https://sandbox-nextjs-silk.vercel.app/api/santara/list-emitten/1/50`)
			.then((r: any) => {
				const { categories, stocks } =
					r.data;

				setStocks(stocks);
				setCategories(categories);
				setIsLoading(false);
			})
			.catch((e) => {
				setIsLoading(false);
				console.log(e);
			});
	}, []);

  useEffect(() => {
    const filteredStocks = stocks.filter((stock: any) => {
      if (selectedCategory !== '_') {
        return stock.category === selectedCategory;
      } else {
        return true
      }
    });

    if (selectedFilter === 'per') {
      filteredStocks.sort((a, b) => Number(a[selectedFilter]) - Number(b[selectedFilter]))
    } else {
      filteredStocks.sort((a, b) => Number(b[selectedFilter]) - Number(a[selectedFilter]))

    }


    setDisplayStocks(filteredStocks)
  }, [stocks, selectedFilter, selectedCategory])

	return (
		<>
			<Grid
				container
				direction='column'
				justifyContent='center'
				alignItems='center'
			>
				<img src={logo} width={200} />
				<Typography
					variant='h5'
					gutterBottom
					component='div'
					className={classes.loading}
				>
					Santara Stock Screener
				</Typography>
			</Grid>
			{isLoading ? (
				<Grid
					container
					direction='column'
					justifyContent='center'
					alignItems='center'
				>
					Mohon tunggu, memakan waktu lumayan lama..
					<CircularProgress className={classes.loading} />
				</Grid>
			) : (
				<Grid
					container
					direction='column'
					justifyContent='center'
					alignItems='center'
				>
					<div style={{ maxWidth: '70%' }}>
						<FormControl fullWidth>
							<InputLabel>Category :</InputLabel>
							<Select
								value={selectedCategory || ''}
								label='Category'
								onChange={(e: any) => setSelectedCategory(e.target.value)}
							>
								<MenuItem value={'_'}>_</MenuItem>
								{categories?.map((e) => (
									<MenuItem key={e} value={e}>
										{e}
									</MenuItem>
								))}
							</Select>
						</FormControl>
						<FormControl fullWidth>
							<InputLabel>Filter :</InputLabel>
							<Select
								value={selectedFilter || ''}
								label='Filter'
								onChange={(e: any) => setSelectedFilter(e.target.value)}
							>
								<MenuItem value={'_'}>_</MenuItem>
								{filter?.map((e) => (
									<MenuItem key={e.value} value={e.value}>
										{e.label}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</div>
					<TableContainer component={Paper}>
						<Table>
							<TableHead>
								<TableRow>
									<TableCell>Emitten</TableCell>
									<TableCell align='right'>Code</TableCell>
									<TableCell align='right'>Dividend Yield (%)</TableCell>
									<TableCell align='right'>PER (%)</TableCell>
									<TableCell align='right'>Performance (%)</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{displayStocks.map((stock: any) => (
									<TableRow key={stock.name}>
										<TableCell component='th' scope='stock'>
											{stock.company_name}
										</TableCell>
										<TableCell align='right'>{stock.code_emiten}</TableCell>
										<TableCell align='right'>{stock.dividend_yeild} </TableCell>
                    <TableCell align='right'>{stock.per} </TableCell>
										<TableCell align='right'>{stock.performance} </TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</Grid>
			)}
		</>
	);
};
