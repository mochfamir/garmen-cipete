import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import Carousel from 'react-material-ui-carousel';
import firebase from 'firebase/app';

import { ItemBasic } from './Home';
import {
	AppBar,
	Box,
	Button,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Dialog,
	Divider,
	Grid,
	IconButton,
	List,
	Icon,
	ListItem,
	ListItemText,
	Toolbar,
	Typography,
} from '@material-ui/core';
import { ArrowBack, Close, WhatsApp } from '@material-ui/icons';
import NumberFormat from 'react-number-format';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

const test = {
	itemid: 3177295799,
	price_max_before_discount: -1,
	item_status: 'normal',
	can_use_wholesale: true,
	brand_id: 0,
	show_free_shipping: false,
	estimated_days: 2,
	is_hot_sales: null,
	is_slash_price_item: null,
	upcoming_flash_sale: null,
	slash_lowest_price: null,
	is_partial_fulfilled: false,
	condition: 1,
	show_original_guarantee: false,
	add_on_deal_info: null,
	is_non_cc_installment_payment_eligible: false,
	categories: [
		{
			display_name: 'Pakaian Wanita',
			catid: 100017,
			image: null,
			no_sub: false,
			is_default_subcat: false,
			block_buyer_platform: null,
		},
		{
			display_name: 'Atasan',
			catid: 100099,
			image: null,
			no_sub: false,
			is_default_subcat: false,
			block_buyer_platform: null,
		},
		{
			display_name: 'Kaos',
			catid: 100352,
			image: null,
			no_sub: true,
			is_default_subcat: false,
			block_buyer_platform: null,
		},
	],
	ctime: 1608631255,
	name: 'Darcy Vneck Oversized Shirt Wanita Polos',
	show_shopee_verified_label: true,
	userid: null,
	size_chart: null,
	is_pre_order: false,
	service_by_shopee_flag: null,
	historical_sold: 4942,
	reference_item_id: '',
	recommendation_info: null,
	bundle_deal_info: null,
	bundle_deal_id: 0,
	has_lowest_price_guarantee: false,
	shipping_icon_type: 0,
	overall_purchase_limit: {
		order_max_purchase_limit: 0,
		item_overall_quota: null,
		overall_purchase_limit: null,
		end_date: null,
		start_date: null,
	},
	images: [
		'7f94d3e2a43eaf626529fa0548fefe93',
		'6d35aebf4e5eccc57e4bd6572a6532e3',
		'e471a53cf8ebc9a3cdd9be7c519a55cc',
		'eaa903e38bb772350730c06c43796bf2',
		'829a15db46b7aada160b40b6a1ea682b',
		'4f123c29383dd3ea018f35a6dd2d6a5c',
		'68aec1799d3cf07ba7d521e391211097',
		'68814309073dcc3e8b6b8c2832b754d4',
		'8653ea43b5a233352d552e718b8c7343',
	],
	price_before_discount: 0,
	cod_flag: 0,
	catid: 100017,
	is_official_shop: false,
	is_mart: false,
	coin_earn_label: null,
	hashtag_list: null,
	sold: 918,
	makeup: null,
	item_rating: {
		rating_star: 4.879488,
		rating_count: [2033, 1, 2, 32, 171, 1827],
		rcount_with_image: 550,
		rcount_with_context: 693,
	},
	show_official_shop_label_in_title: false,
	discount: null,
	reason: null,
	label_ids: [
		1000167, 1001657, 1003880, 1001175, 35, 1003210, 1003211, 1003878, 1004684,
		1000287, 1001019, 1007149, 1000031, 1000006, 1003097, 1000741,
	],
	has_group_buy_stock: false,
	other_stock: 36,
	deep_discount: null,
	attributes: [
		{
			is_pending_qc: false,
			idx: 0,
			value: 'Katun',
			id: 100134,
			is_timestamp: false,
			name: 'Bahan',
		},
		{
			is_pending_qc: false,
			idx: 1,
			value: 'Polos',
			id: 100162,
			is_timestamp: false,
			name: 'Motif',
		},
		{
			is_pending_qc: false,
			idx: 2,
			value: 'Ya',
			id: 101004,
			is_timestamp: false,
			name: 'Ukuran Jumbo',
		},
	],
	pack_size: null,
	last_active_time: null,
	badge_icon_type: 0,
	liked: false,
	is_on_flash_sale: null,
	cmt_count: 2033,
	is_live_streaming_price: null,
	image: '7f94d3e2a43eaf626529fa0548fefe93',
	recommendation_algorithm: null,
	is_cc_installment_payment_eligible: false,
	shopid: 227548056,
	normal_stock: 36,
	video_info_list: [],
	installment_plans: null,
	view_count: 67904,
	voucher_info: null,
	current_promotion_has_reserve_stock: false,
	liked_count: 7745,
	show_official_shop_label: false,
	price_min_before_discount: -1,
	show_discount: 0,
	preview_info: null,
	flag: 131072,
	exclusive_price_info: null,
	current_promotion_reserved_stock: 0,
	wholesale_tier_list: [
		{
			min_count: 6,
			price: 5300000000,
			max_count: null,
		},
	],
	group_buy_info: null,
	shopee_verified: true,
	item_has_post: false,
	hidden_price_display: null,
	transparent_background_image: '',
	welcome_package_info: null,
	discount_stock: 0,
	coin_info: {
		spend_cash_unit: 100000,
		coin_earn_items: [],
	},
	is_adult: false,
	currency: 'IDR',
	raw_discount: 0,
	is_preferred_plus_seller: true,
	is_category_failed: false,
	price_min: 5800000000,
	can_use_bundle_deal: false,
	cb_option: 0,
	brand: null,
	stock: 36,
	status: 1,
	price_max: 5800000000,
	spl_info: null,
	is_group_buy_item: null,
	description:
		'DARCY VNECK SHIRT🔥\nAvailable in Color\n1. Army\n2. Lavender\n3. White\n4. Mustard\n\nONLY Rp. 58.000/pc\nSeri 6pcs Rp. 53.000/pc\n*Seri harus mix warna*\n\nMatterial :  Tory Burch Adem\nDetail : Model Batwing\n\nSize : \nLD 130cm\nPanjang 68cm\nLingkar Lengan 34cm\n\nMohon di Perhatikan Sebelum Membeli : \n1.\tJangan selesaikan pesanan dahulu jika ada cacat atau barang tidak sesuai \n2.\tKita telah memeriksa barang sebelum di kirim, jika ada kesalahan atau reject bisa chat ke admin dulu ya, “Anda Sopan kami Sengan”\n3.\tMohon untuk membaca deskripsi ukuran dan bahan ya, karna kita sudah sangat detail menulisnya, jadi jangan bilang “Tidak Muat, Kekecilan, Bahan Tidak Sesuai” di baca Lagi ya.\n4.\tMohon untuk Ekspetasi kalian terhadap barang juga di sesuaikan ya, karna pada dasarnya “Ada Harga Ada Kualitas juga ya sista”\n5.\tPerbedaan warna dan tekstur bahan di foto kami dan asli nya kemungkinan berbeda sedikit, karna efek foto dan layar di masing-masing HP kalian ya.\nTerimkasih atas perhatiannya, selamat Berbelanja sista, Be Smart Buyer 😊',
	flash_sale: null,
	models: [
		{
			itemid: 3177295799,
			status: 1,
			current_promotion_reserved_stock: 0,
			name: 'Lavender',
			promotionid: 0,
			price: 5800000000,
			price_stocks: [
				{
					model_id: 24296291602,
					stockout_time: 0,
					region: 'ID',
					rebate: null,
					price: 5800000000,
					promotion_type: 0,
					allocated_stock: null,
					shop_id: 227548056,
					end_time: null,
					stock_breakdown_by_location: [],
					item_id: 3177295799,
					promotion_id: 0,
					purchase_limit: null,
					start_time: null,
					stock: 9,
				},
			],
			current_promotion_has_reserve_stock: false,
			currency: 'IDR',
			normal_stock: 9,
			extinfo: {
				seller_promotion_limit: null,
				has_shopee_promo: null,
				group_buy_info: null,
				holiday_mode_old_stock: null,
				tier_index: [2],
				seller_promotion_refresh_time: 0,
			},
			has_gimmick_tag: false,
			price_before_discount: 0,
			modelid: 24296291602,
			sold: 1041,
			stock: 9,
		},
		{
			itemid: 3177295799,
			status: 1,
			current_promotion_reserved_stock: 0,
			name: 'Black',
			promotionid: 0,
			price: 5800000000,
			price_stocks: [
				{
					model_id: 24296291603,
					stockout_time: 0,
					region: 'ID',
					rebate: null,
					price: 5800000000,
					promotion_type: 0,
					allocated_stock: null,
					shop_id: 227548056,
					end_time: null,
					stock_breakdown_by_location: [],
					item_id: 3177295799,
					promotion_id: 0,
					purchase_limit: null,
					start_time: null,
					stock: 10,
				},
			],
			current_promotion_has_reserve_stock: false,
			currency: 'IDR',
			normal_stock: 10,
			extinfo: {
				seller_promotion_limit: null,
				has_shopee_promo: null,
				group_buy_info: null,
				holiday_mode_old_stock: null,
				tier_index: [3],
				seller_promotion_refresh_time: 0,
			},
			has_gimmick_tag: false,
			price_before_discount: 0,
			modelid: 24296291603,
			sold: 1091,
			stock: 10,
		},
		{
			itemid: 3177295799,
			status: 1,
			current_promotion_reserved_stock: 0,
			name: 'Dark Olive',
			promotionid: 0,
			price: 5800000000,
			price_stocks: [
				{
					model_id: 33403774528,
					stockout_time: 0,
					region: 'ID',
					rebate: null,
					price: 5800000000,
					promotion_type: 0,
					allocated_stock: null,
					shop_id: 227548056,
					end_time: null,
					stock_breakdown_by_location: [],
					item_id: 3177295799,
					promotion_id: 0,
					purchase_limit: null,
					start_time: null,
					stock: 7,
				},
			],
			current_promotion_has_reserve_stock: false,
			currency: 'IDR',
			normal_stock: 7,
			extinfo: {
				seller_promotion_limit: null,
				has_shopee_promo: null,
				group_buy_info: null,
				holiday_mode_old_stock: null,
				tier_index: [0],
				seller_promotion_refresh_time: 0,
			},
			has_gimmick_tag: false,
			price_before_discount: 0,
			modelid: 33403774528,
			sold: 753,
			stock: 7,
		},
		{
			itemid: 3177295799,
			status: 1,
			current_promotion_reserved_stock: 0,
			name: 'Sky Blue',
			promotionid: 0,
			price: 5800000000,
			price_stocks: [
				{
					model_id: 33403774531,
					stockout_time: 0,
					region: 'ID',
					rebate: null,
					price: 5800000000,
					promotion_type: 0,
					allocated_stock: null,
					shop_id: 227548056,
					end_time: null,
					stock_breakdown_by_location: [],
					item_id: 3177295799,
					promotion_id: 0,
					purchase_limit: null,
					start_time: null,
					stock: 10,
				},
			],
			current_promotion_has_reserve_stock: false,
			currency: 'IDR',
			normal_stock: 10,
			extinfo: {
				seller_promotion_limit: null,
				has_shopee_promo: null,
				group_buy_info: null,
				holiday_mode_old_stock: null,
				tier_index: [1],
				seller_promotion_refresh_time: 0,
			},
			has_gimmick_tag: false,
			price_before_discount: 0,
			modelid: 33403774531,
			sold: 904,
			stock: 10,
		},
		{
			itemid: 3177295799,
			status: 1,
			current_promotion_reserved_stock: 0,
			name: 'Mustard',
			promotionid: 0,
			price: 5800000000,
			price_stocks: [
				{
					model_id: 34974233373,
					stockout_time: 1624806745,
					region: 'ID',
					rebate: null,
					price: 5800000000,
					promotion_type: 0,
					allocated_stock: null,
					shop_id: 227548056,
					end_time: null,
					stock_breakdown_by_location: [],
					item_id: 3177295799,
					promotion_id: 0,
					purchase_limit: null,
					start_time: null,
					stock: 0,
				},
			],
			current_promotion_has_reserve_stock: false,
			currency: 'IDR',
			normal_stock: 0,
			extinfo: {
				seller_promotion_limit: null,
				has_shopee_promo: null,
				group_buy_info: null,
				holiday_mode_old_stock: null,
				tier_index: [5],
				seller_promotion_refresh_time: 0,
			},
			has_gimmick_tag: false,
			price_before_discount: 0,
			modelid: 34974233373,
			sold: 258,
			stock: 0,
		},
		{
			itemid: 3177295799,
			status: 1,
			current_promotion_reserved_stock: 0,
			name: 'Brown',
			promotionid: 0,
			price: 5800000000,
			price_stocks: [
				{
					model_id: 34974233374,
					stockout_time: 1628777580,
					region: 'ID',
					rebate: null,
					price: 5800000000,
					promotion_type: 0,
					allocated_stock: null,
					shop_id: 227548056,
					end_time: null,
					stock_breakdown_by_location: [],
					item_id: 3177295799,
					promotion_id: 0,
					purchase_limit: null,
					start_time: null,
					stock: 0,
				},
			],
			current_promotion_has_reserve_stock: false,
			currency: 'IDR',
			normal_stock: 0,
			extinfo: {
				seller_promotion_limit: null,
				has_shopee_promo: null,
				group_buy_info: null,
				holiday_mode_old_stock: null,
				tier_index: [4],
				seller_promotion_refresh_time: 0,
			},
			has_gimmick_tag: false,
			price_before_discount: 0,
			modelid: 34974233374,
			sold: 298,
			stock: 0,
		},
		{
			itemid: 3177295799,
			status: 1,
			current_promotion_reserved_stock: 0,
			name: 'Dark Blue',
			promotionid: 0,
			price: 5800000000,
			price_stocks: [
				{
					model_id: 45947584898,
					stockout_time: 1628350485,
					region: 'ID',
					rebate: null,
					price: 5800000000,
					promotion_type: 0,
					allocated_stock: null,
					shop_id: 227548056,
					end_time: null,
					stock_breakdown_by_location: [],
					item_id: 3177295799,
					promotion_id: 0,
					purchase_limit: null,
					start_time: null,
					stock: 0,
				},
			],
			current_promotion_has_reserve_stock: false,
			currency: 'IDR',
			normal_stock: 0,
			extinfo: {
				seller_promotion_limit: null,
				has_shopee_promo: null,
				group_buy_info: null,
				holiday_mode_old_stock: null,
				tier_index: [7],
				seller_promotion_refresh_time: 0,
			},
			has_gimmick_tag: false,
			price_before_discount: 0,
			modelid: 45947584898,
			sold: 229,
			stock: 0,
		},
		{
			itemid: 3177295799,
			status: 1,
			current_promotion_reserved_stock: 0,
			name: 'Soft Pink',
			promotionid: 0,
			price: 5800000000,
			price_stocks: [
				{
					model_id: 45947584899,
					stockout_time: 1628351635,
					region: 'ID',
					rebate: null,
					price: 5800000000,
					promotion_type: 0,
					allocated_stock: null,
					shop_id: 227548056,
					end_time: null,
					stock_breakdown_by_location: [],
					item_id: 3177295799,
					promotion_id: 0,
					purchase_limit: null,
					start_time: null,
					stock: 0,
				},
			],
			current_promotion_has_reserve_stock: false,
			currency: 'IDR',
			normal_stock: 0,
			extinfo: {
				seller_promotion_limit: null,
				has_shopee_promo: null,
				group_buy_info: null,
				holiday_mode_old_stock: null,
				tier_index: [6],
				seller_promotion_refresh_time: 0,
			},
			has_gimmick_tag: false,
			price_before_discount: 0,
			modelid: 45947584899,
			sold: 189,
			stock: 0,
		},
		{
			itemid: 3177295799,
			status: 1,
			current_promotion_reserved_stock: 0,
			name: 'White',
			promotionid: 0,
			price: 5800000000,
			price_stocks: [
				{
					model_id: 111342851904,
					stockout_time: 1628381008,
					region: 'ID',
					rebate: null,
					price: 5800000000,
					promotion_type: 0,
					allocated_stock: null,
					shop_id: 227548056,
					end_time: null,
					stock_breakdown_by_location: [],
					item_id: 3177295799,
					promotion_id: 0,
					purchase_limit: null,
					start_time: null,
					stock: 0,
				},
			],
			current_promotion_has_reserve_stock: false,
			currency: 'IDR',
			normal_stock: 0,
			extinfo: {
				seller_promotion_limit: null,
				has_shopee_promo: null,
				group_buy_info: null,
				holiday_mode_old_stock: null,
				tier_index: [8],
				seller_promotion_refresh_time: 0,
			},
			has_gimmick_tag: false,
			price_before_discount: 0,
			modelid: 111342851904,
			sold: 2,
			stock: 0,
		},
	],
	has_low_fulfillment_rate: false,
	price: 5800000000,
	shop_location: 'KOTA TANGERANG',
	tier_variations: [
		{
			images: [
				'6b35f5232a63991d0d0b4782a2c9133f',
				'd7ba95cff41241991799f9c2287858d1',
				'20c9016e6bbf0bc2d6719593670c3827',
				'20d50aaf23b690a21e3d40dba0741e19',
				'be450710c160a85ed70c7f8014e83378',
				'fb201e1ec96313dac8402b12b116f6ab',
				'091d8b09db0bf9cb0380b8726c55bc9b',
				'0e27fbfcacd44c6f076987241d0afb69',
				'e1325eca11d271963f8901ebc0967d18',
			],
			properties: [],
			type: 0,
			name: 'Warna',
			options: [
				'Dark Olive',
				'Sky Blue',
				'Lavender',
				'Black',
				'Brown',
				'Mustard',
				'Soft Pink',
				'Dark Blue',
				'White',
			],
		},
	],
	min_purchase_limit: 1,
	can_use_cod: null,
	makeups: null,
	welcome_package_type: 0,
	show_official_shop_label_in_normal_position: null,
	is_alcohol_product: false,
	item_type: 0,
	spl_installment_tenure: null,
	show_recycling_info: false,
};

const theme = createTheme({
  palette: {
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});


declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary'];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    neutral?: PaletteOptions['primary'];
  }
}

// Update the Button's color prop options
declare module '@mui/material/AppBar' {
  interface AppBarPropsColor {
    neutral: true;
  }
}


export const Detail = () => {
	const [item, setItem] = useState<ItemBasic>({} as ItemBasic);
	const [dataLocal, setDataLocal] = useState<ItemBasic>({} as ItemBasic);
	const [priceInString, setPriceInString] = useState(
		`${test.price + 2000000000}`
	);
	const [dataDialog, setDataDialog] = useState<any>({});
	const [openLink, setOpenLink] = useState(0);
	// @ts-ignore
	const { shopid, itemid } = useParams();
	const history = useHistory();
	const productCode = 'GC-' + Number(itemid).toString(32);
	const database = firebase.database();

	useEffect(() => {
		// const itemRef = database.ref('items/' + itemid);
		// itemRef.on('value', (snapshot) => {
		// 	const data = snapshot.val();

		// 	if (data) {
		// 		setItem(data);
		// 	} else {
		// 		console.log('No Data');
		// 	}
		// });
		axios
			.get(
				`https://sandbox-nextjs-silk.vercel.app/api/shopee/get/${shopid}/${itemid}`
			)
			.then(({ data }) => {
				setItem(data.data);
			})
			.catch((err) => console.log(err));
	}, []);

	useEffect(() => {
		const rawDataLocal = localStorage.getItem('item') as string;
		const _dataLocal = JSON.parse(rawDataLocal || '');

		setPriceInString(`${_dataLocal.price}`);
		setDataLocal(_dataLocal);
	}, []);

	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	useEffect(() => {
		console.log(process.env.TEST);
		if (openLink > 6) {
			window.open(
				`https://shopee.co.id/Darcy-Vneck-Oversized-Shirt-Wanita-Polos-i.${shopid}.${itemid}`,
				'_blank'
			);
			setOpenLink(0);
		}
	}, [openLink]);

	return item?.name ? (
		<Box>
			<ThemeProvider theme={theme}>
				<AppBar position='static'>
					<Toolbar>
						<IconButton
							edge='start'
							color='inherit'
							aria-label='menu'
							onClick={() => history.push('/')}
						>
							<ArrowBack />
						</IconButton>
						<Typography variant='h6' onClick={() => history.goBack()}>
							Back
						</Typography>
					</Toolbar>
				</AppBar>
			</ThemeProvider>
			{dataLocal?.images && (
				<Carousel autoPlay={false} indicators={true} animation={'slide'}>
					{dataLocal?.images.map((image, i) => (
						<img
							key={i}
							width='100%'
							src={`https://cf.shopee.co.id/file/${image}`}
						/>
					))}
				</Carousel>
			)}
			<Box m={2}>
				<Typography gutterBottom variant='subtitle2'>
					Detail Produk
				</Typography>
				<Typography gutterBottom variant='caption'>
					<table>
						<tbody>
							<tr>
								<td>Kode Produk</td>
								<td> : </td>
								<td
									onDoubleClick={() => {
										setOpenLink(openLink + 1);
									}}
								>
									{productCode}
								</td>
							</tr>
							<tr>
								<td>Price</td>
								<td> : </td>
								<td>
									{priceInString && (
										<NumberFormat
											value={priceInString.slice(0, priceInString.length - 5)}
											displayType={'text'}
											thousandSeparator={true}
											prefix={'Rp.'}
										/>
									)}
								</td>
							</tr>
							<tr>
								<td>Stock</td>
								<td> : </td>
								<td>{item.stock}</td>
							</tr>
							<tr>
								<td>Available </td>
								<td> : </td>
								<td>
									{item.models
										.filter((each) => each.stock > 0)
										.map((each) =>
											dataLocal?.tier_variations[0].options.find((n) =>
												n.startsWith(each.name)
											)
										)
										.join(' - ')}
								</td>
							</tr>
							<tr>
								<td>Sold out </td>
								<td> : </td>
								<td>
									{item.models
										.filter((each) => each.stock < 1)
										.map((each) =>
											dataLocal?.tier_variations[0].options.find((n) =>
												n.startsWith(each.name)
											)
										)
										.join(' - ')}
								</td>
							</tr>
							{item?.attributes?.map((attribute) => (
								<tr>
									<td>{attribute.name}</td>
									<td> : </td>
									<td>{attribute.value}</td>
								</tr>
							))}
						</tbody>
					</table>
					<Grid
						container
						direction='row'
						justifyContent='flex-end'
						alignItems='center'
					>
						<Button
							variant='outlined'
							endIcon={<WhatsApp style={{ color: '#25D366' }} />}
							onClick={() =>
								window.open(
									`https://api.whatsapp.com/send/?phone=6281280662483&text=Halo Kak,+saya+mau+bertanya+untuk+produk+${productCode}+nih!&app_absent=0`,
									'_blank'
								)
							}
						>
							<span style={{ color: '#25D366' }}>Contact Us!</span>
						</Button>
					</Grid>
				</Typography>
			</Box>
			<div>
				<Dialog fullScreen open={open} onClose={handleClose}>
					<AppBar style={{ position: 'relative' }}>
						<Toolbar>
							<IconButton
								edge='start'
								color='inherit'
								onClick={handleClose}
								aria-label='close'
							>
								<Close />
							</IconButton>
							<Typography variant='h6'>Back</Typography>
						</Toolbar>
					</AppBar>
					<img src={dataDialog?.imageUrl || ''} width='100%' />
					<Box mt={2} ml={3} justifyContent='space-between' alignItems='end'>
						<Typography gutterBottom variant='subtitle2'>
							{dataDialog.name}
						</Typography>
						<Typography gutterBottom variant='caption'>
							<table>
								<tbody>
									{/* <tr>
										<td>Price</td>
										<td> : </td>
										<td>
											<NumberFormat
												value={dataDialog?._priceInString?.slice(
													0,
													dataDialog?._priceInString?.length - 5
												)}
												displayType={'text'}
												thousandSeparator={true}
												prefix={'Rp.'}
											/>
										</td>
									</tr> */}
									<tr>
										<td>Stock</td>
										<td> : </td>
										<td>{dataDialog.stock}</td>
									</tr>
								</tbody>
							</table>
						</Typography>
						<span></span>
						<a
							style={{ display: 'table-cell' }}
							href={`https://api.whatsapp.com/send/?phone=6281280662483&text=Halo Kak,+saya+mau+bertanya+untuk+produk+${productCode}+${dataDialog.name}+nih!&app_absent=0`}
							target='_blank'
						>
							Order atau tanya di whatsapp
						</a>
					</Box>
				</Dialog>
			</div>
		</Box>
	) : (
		<h1>loading...</h1>
	);
};
