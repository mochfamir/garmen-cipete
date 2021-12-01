import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import firebase from 'firebase/app';
import NumberFormat from 'react-number-format';
import Carousel from 'react-material-ui-carousel';

import logo from '../assets/logo.jpg';
import testCarousel from '../assets/test-carousel.jpg';

import {
	Grid,
	Box,
	Card,
	CardActionArea,
	CardMedia,
	CardContent,
	Typography,
	CircularProgress,
} from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import { makeStyles } from '@mui/styles';

export interface ItemBasic {
	itemid: number;
	price_max_before_discount: number;
	item_status: string;
	can_use_wholesale: boolean;
	brand_id: number;
	show_free_shipping: boolean;
	estimated_days: number;
	is_hot_sales: any;
	is_slash_price_item: any;
	upcoming_flash_sale: any;
	slash_lowest_price: any;
	is_partial_fulfilled: boolean;
	condition: number;
	show_original_guarantee: boolean;
	add_on_deal_info: any;
	is_non_cc_installment_payment_eligible: boolean;
	categories: {
		display_name: string;
		catid: number;
		image: string | null;
		no_sub: boolean;
		is_default_subcat: boolean;
		block_buyer_platform: any;
	}[];
	ctime: number;
	name: string;
	show_shopee_verified_label: boolean;
	userid: null;
	size_chart: null;
	is_pre_order: boolean;
	service_by_shopee_flag: boolean | null;
	historical_sold: number;
	reference_item_id: string;
	recommendation_info: any;
	bundle_deal_info: any;
	bundle_deal_id: number;
	has_lowest_price_guarantee: boolean;
	shipping_icon_type: number;
	overall_purchase_limit: {
		order_max_purchase_limit: number;
		item_overall_quota: number | null;
		overall_purchase_limit: number | null;
		end_date: number | null;
		start_date: number | null;
	} | null;
	images: string[];
	price_before_discount: number;
	cod_flag: number;
	catid: number;
	is_official_shop: boolean;
	is_mart: boolean;
	coin_earn_label: any;
	hashtag_list: any;
	sold: number;
	makeup: any;
	item_rating: {
		rating_star: number;
		rating_count: number[];
		rcount_with_image: number;
		rcount_with_context: number;
	};
	show_official_shop_label_in_title: boolean;
	discount: any;
	reason: any;
	label_ids: number[];
	has_group_buy_stock: boolean;
	other_stock: number;
	deep_discount: any;
	attributes: {
		is_pending_qc: boolean;
		idx: number;
		value: string;
		id: number;
		is_timestamp: boolean;
		name: string;
	}[];
	pack_size: any;
	last_active_time: any;
	badge_icon_type: number;
	liked: boolean;
	is_on_flash_sale: any;
	cmt_count: number;
	is_live_streaming_price: any;
	image: string;
	recommendation_algorithm: any;
	is_cc_installment_payment_eligible: boolean;
	shopid: number;
	normal_stock: number;
	video_info_list: any[];
	installment_plans: any;
	view_count: number;
	voucher_info: any;
	current_promotion_has_reserve_stock: boolean;
	liked_count: number;
	show_official_shop_label: boolean;
	price_min_before_discount: number;
	show_discount: number;
	preview_info: any;
	flag: number;
	exclusive_price_info: any;
	current_promotion_reserved_stock: number;
	wholesale_tier_list: {
		min_count: number;
		price: number;
		max_count: any;
	}[];
	group_buy_info: any;
	shopee_verified: boolean;
	item_has_post: boolean;
	hidden_price_display: any;
	transparent_background_image: string;
	welcome_package_info: any;
	discount_stock: number;
	coin_info: {
		spend_cash_unit: number;
		coin_earn_items: any[];
	};
	is_adult: boolean;
	currency: string;
	raw_discount: number;
	is_preferred_plus_seller: boolean;
	is_category_failed: boolean;
	price_min: number;
	can_use_bundle_deal: boolean;
	cb_option: number;
	brand: any;
	stock: number;
	status: number;
	price_max: number;
	spl_info: any;
	is_group_buy_item: any;
	description: string;
	flash_sale: any;
	models: {
		itemid: number;
		status: number;
		current_promotion_reserved_stock: number;
		name: string;
		promotionid: number;
		price: number;
		price_stocks: {
			model_id: number;
			stockout_time: number;
			region: string;
			rebate: any;
			price: number;
			promotion_type: number;
			allocated_stock: any;
			shop_id: number;
			end_time: any;
			stock_breakdown_by_location: any[];
			item_id: number;
			promotion_id: number;
			purchase_limit: any;
			start_time: any;
			stock: number;
		}[];
		current_promotion_has_reserve_stock: boolean;
		currency: string;
		normal_stock: number;
		extinfo: {
			seller_promotion_limit: any;
			has_shopee_promo: any;
			group_buy_info: any;
			holiday_mode_old_stock: any;
			tier_index: number[];
			seller_promotion_refresh_time: number;
		};
		has_gimmick_tag: boolean;
		price_before_discount: number;
		modelid: number;
		sold: number;
		stock: number;
	}[];
	has_low_fulfillment_rate: boolean;
	price: number;
	shop_location: string;
	tier_variations: {
		images: string[];
		properties: any[];
		type: number;
		name: string;
		options: string[];
	}[];
	min_purchase_limit: number;
	can_use_cod: any;
	makeups: any;
	welcome_package_type: number;
	show_official_shop_label_in_normal_position: any;
	is_alcohol_product: boolean;
	item_type: number;
	spl_installment_tenure: any;
	show_recycling_info: boolean;
}
export interface Item {
	itemid: number;
	shopid: number;
	item_basic: ItemBasic;
}

const useStyles = makeStyles({
	loading: {
		color: '#4D493D !important',
	},
});

export const Home = () => {
	const classes = useStyles();
	// @ts-ignore
	const [items, setItems] = useState([]);
	const [terbaru, setTerbaru] = useState([]);
	const history = useHistory();
	const [showedItems, setShowedItems] = useState([]);
	const [search, setSearch] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalItems, setTotalItems] = useState(5);
	const [carouselItems, setCarouselItems] = useState([]);

	let tmpItems = [];

	const getItems = async () => {
		try {
			const limit = 15;
			const startAt = currentPage * limit - limit;
			const searchBy = 'sales';
			const { data } = await axios.get(
				`https://sandbox-nextjs-silk.vercel.app/api/shopee/${searchBy}/${startAt}/${limit}`
			);
			const _items = data.data;
			const _totalItems = data.totalProduct;
			setTotalItems(_totalItems);
			setItems(_items);
			setIsLoading(false);
		} catch (error) {
			return [];
		}
	};

	const getTerbaru = async () => {
		try {
			const limit = 2;
			const startAt = currentPage * limit - limit;
			const searchBy = 'ctimes';
			const { data } = (
				await axios.get(
					`https://sandbox-nextjs-silk.vercel.app/api/shopee/${searchBy}/${startAt}/${limit}`
				)
			).data;
			const _items = data;
			setTerbaru(_items);
			setIsLoading(false);
		} catch (error) {
			return [];
		}
	};

	// Initialize
	useEffect(() => {
		setIsLoading(true);
		getItems();
		getTerbaru();

		const dbRef = firebase.database().ref();
		dbRef
			.child('items')
			.get()
			.then((snapshot) => {
				if (snapshot.exists()) {
					setCarouselItems(snapshot.val().carousels);
				} else {
					console.log('No data available');
				}
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	// search
	useEffect(() => {
		if (!search) {
			setShowedItems(items);
		} else if (search) {
			const _showedItems = items.filter((item: Item) =>
				item.item_basic.name.includes(search)
			);
			setShowedItems(_showedItems);
		}
	}, [search, items]);

	useEffect(() => {
		setIsLoading(true);
		getItems();
		getTerbaru();
	}, [currentPage]);

	return (
		<Box ml={1} mr={1}>
			<Grid
				container
				direction='column'
				justifyContent='center'
				alignItems='center'
			>
				<img src={logo} width={200} />
				<Carousel indicators={carouselItems.length > 0}>
					{carouselItems.map((item) => (
						<div>
							<img
								src={item}
								style={{ maxWidth: '100vw', maxHeight: '100vh' }}
							/>
						</div>
					))}
				</Carousel>
			</Grid>
			{isLoading ? (
				<Grid
					container
					direction='column'
					justifyContent='center'
					alignItems='center'
				>
					<CircularProgress className={classes.loading} />
				</Grid>
			) : (
				<>
					<Typography
						variant='h5'
						gutterBottom
						component='div'
						className={classes.loading}
					>
						Terbaru
					</Typography>
					<Grid
						container
						direction='row'
						justifyContent='flex-start'
						alignItems='center'
						spacing={3}
					>
						{terbaru
							.filter((item: Item, i: number) => i < 3)
							.map((item: Item, i: number) => {
								const priceInString = `${item.item_basic.price}`;
								return (
									<Grid key={i} item style={{ width: '48%' }}>
										<Card
											onClick={() => {
												localStorage.setItem(
													'item',
													JSON.stringify(item.item_basic)
												);
												history.push(
													`/detail/${item.shopid}/${item.item_basic.itemid}`
												);
											}}
										>
											<CardActionArea>
												<CardMedia>
													<img
														src={`https://cf.shopee.co.id/file/${item.item_basic.image}`}
														alt=''
														width='100%'
													/>
												</CardMedia>
												<CardContent>
													<Typography gutterBottom variant='subtitle2'>
														{item.item_basic.name}
													</Typography>
													<Typography gutterBottom variant='caption'>
														<table>
															<tbody>
																<tr>
																	<td>Price</td>
																	<td> : </td>
																	<td>
																		<NumberFormat
																			value={priceInString.slice(
																				0,
																				priceInString.length - 5
																			)}
																			displayType={'text'}
																			thousandSeparator={true}
																			prefix={'Rp.'}
																		/>
																	</td>
																</tr>
																<tr>
																	<td>Stock</td>
																	<td> : </td>
																	<td>{item.item_basic.stock}</td>
																</tr>
															</tbody>
														</table>
													</Typography>
												</CardContent>
											</CardActionArea>
										</Card>
									</Grid>
								);
							})}
					</Grid>
					<br />
					<Typography variant='h5' gutterBottom component='div'>
						Semua produk
					</Typography>
					<Grid
						container
						justifyContent='flex-start'
						alignItems='center'
						spacing={3}
					>
						{showedItems.map((item: Item, i: number) => {
							const priceInString = `${item.item_basic.price}`;
							return (
								<Grid key={i} item style={{ width: '48%' }}>
									<Card
										onClick={() => {
											localStorage.setItem(
												'item',
												JSON.stringify(item.item_basic)
											);
											history.push(
												`/detail/${item.shopid}/${item.item_basic.itemid}`
											);
										}}
									>
										<CardActionArea>
											<CardMedia>
												<img
													src={`https://cf.shopee.co.id/file/${item.item_basic.image}`}
													alt=''
													width='100%'
												/>
											</CardMedia>
											<CardContent>
												<Typography gutterBottom variant='subtitle2'>
													{item.item_basic.name}
												</Typography>
												<Typography gutterBottom variant='caption'>
													<table>
														<tbody>
															<tr>
																<td>Price</td>
																<td> : </td>
																<td>
																	<NumberFormat
																		value={priceInString.slice(
																			0,
																			priceInString.length - 5
																		)}
																		displayType={'text'}
																		thousandSeparator={true}
																		prefix={'Rp.'}
																	/>
																</td>
															</tr>
															<tr>
																<td>Stock</td>
																<td> : </td>
																<td>{item.item_basic.stock}</td>
															</tr>
														</tbody>
													</table>
												</Typography>
											</CardContent>
										</CardActionArea>
									</Card>
								</Grid>
							);
						})}
					</Grid>
				</>
			)}
			<Box mb={10} mt={5}>
				<Grid
					container
					direction='column'
					justifyContent='center'
					alignItems='center'
				>
					<Pagination
						color='primary'
						count={Math.ceil(totalItems / 15)}
						onChange={(e, value) => setCurrentPage(value)}
					/>
				</Grid>
			</Box>
		</Box>
	);
};
