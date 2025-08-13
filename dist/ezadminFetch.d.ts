import RSAKey from './RSAKey';
declare namespace EzadminFetch {
    namespace Par {
        interface I100 {
            auto_search: string;
            search_all_product: string;
            multi_supply_group: string;
            multi_supply: string;
            str_supply_code: string;
            tags_string: string;
            product_tag_include_type: 0 | 1;
            query_type: 'name' | 'product_id' | string & {};
            query_str: string;
            stock_type: 0;
            stock_start: string;
            stock_end: string;
            notrans_day: string;
            notrans_cnt: string;
            notrans_status: 0;
            stock_status: 0;
            is_set: 0;
            start_date: string;
            start_hour: string;
            end_date: string;
            end_hour: string;
            date_period_sel: 0;
            work_type: 'stockin';
            work_start: string;
            work_end: string;
            inout_type: 0;
            product_date: string;
            start_date2: string;
            end_date2: string;
            date_period_sel2: 0;
            products_sort: 0 | 1;
            category: 0;
            except_soldout: 0;
            temp_soldout: 0;
            location: 0;
        }
        interface C200 {
            page: string;
            str_category: string;
            template: 'C200';
            id: string;
            action: string;
            china_db: string;
            s_group_id: string;
            multi_supply_group: string;
            multi_supply: string;
            str_supply_code: string;
            string_type: string;
            string: string;
            date_type: string;
            start_date: string;
            end_date: string;
            date_period_sel: string;
            stock_manage: string;
            e_stock: string;
            e_sale: string;
            temp_soldout: string;
            tags_string: string;
            product_tag_include_type: string;
            location: string;
            sync: string;
            pack_disable: string;
            is_set: string;
            sel_sort: string;
            category: string;
        }
        interface EL00 {
            is_kakao: 0 | 1;
            product_name: string;
            options: string;
            shop_product_options: string;
            product_id: string;
            shop_product_id: string;
            /** 판매처 */
            shop_id: number[] | '';
            group_id: string;
            supply_code: number;
            status: number;
            order_cs: number;
            print_enable: number;
            start_date2: string;
            end_date2: string;
            start_date: string;
            start_hour: string;
            end_date: string;
            end_hour: string;
            memo: string;
            template_title: string;
            send_yellow_id: string;
            sender_mobile: string;
            /** 90byte 초과시 자름 (SMS 1건만 전송) */
            send_single: 0 | 1;
            /** 전화번호 저장 */
            update_sender_mobile: 0 | 1;
            /** 금일 기발송 된 고객제외 */
            is_today_once: 0 | 1;
            /** 금일 기발송 된 고객제외(알림톡) */
            is_today_once_kakao: 0 | 1;
            /** 기발송된 주문건 제외 */
            is_order_once: 0 | 1;
            /** 기발송된 주문건 제외(알림톡) */
            is_order_once_kakao: 0 | 1;
            resend_sms: 0 | 1;
            target_receiver: 'recv_mobile' | 'order_mobile';
            template: 'EL00';
            action: string;
            str_seqs: string;
            /** 판매처 검색제외 */
            shop_id_not_in: 0 | 1;
            enable_sale: 0 | 1;
            use_temp_soldout: 0 | 1;
            cs_content: string;
            cs_content_null: 0 | 1;
            date_type: 'collect_date';
            product_date: string;
            location: string;
            part_deliv: 0 | 1;
            is_packed: 0 | 1;
            is_hold: 0 | 1;
            is_gift: 0 | 1;
            is_copy: 0 | 1;
            tags_string: string;
            labels_string: string;
            order_label_include_type: 0 | 1;
            product_tag_include_type: 0 | 1;
            trans_corp: number;
            user_area: string;
            send_time: string;
            s_group_id: string;
            /** 재고 유형(0: 정상재고) */
            stock_type: number;
            /** 재고 수량(시작) */
            stock_start: number | '';
            /** 재고 수량(종료) */
            stock_end: number | '';
            /** 재고 상태 */
            stock_status: number;
            island: 0 | 1;
            takeback_status: string;
            delay_count: string;
            orders_memo: string;
        }
    }
    type Par = Par.I100 | Par.C200 | Par.EL00;
    type Result<Template> = {
        err_prd_cnt?: string;
        is_overflow?: null;
        page: string;
        tot_stock?: {
            sum: TotalStock;
            [K: string]: TotalStock;
        };
    } & ({
        records: 0;
        total: 0;
        rows: undefined;
    } | {
        records: number;
        total: number;
        rows: Row<Template>[];
    });
    interface Row<Template> {
        id: number;
        cell: Template;
    }
    interface TotalStock {
        bad?: string;
        stock: string;
        stock_price: string;
        stock_shop_price: string;
        stock_supply_price: string;
    }
    namespace Template {
        /** 재고관리 */
        interface I100 {
            /** 접수 */
            before_trans: string;
            /** 카테고리 */
            category: string;
            /** 1주발주합계 */
            collect_7_total: string;
            /** 2주발주합계 */
            collect_14_total: string;
            /** 3주발주합계 */
            collect_21_total: string;
            /** 한달발주합계 */
            collect_30_total: string;
            /** 6주발주합계 */
            collect_42_total: string;
            /** 12주발주합계 */
            collect_84_total: string;
            /** 차트 */
            grid_chart: string;
            /** 로그 */
            grid_log: string;
            /** 작업 */
            grid_work: string;
            /** 상품코드 */
            key: string;
            /** 로케이션 */
            location: string;
            /** 마진율 */
            margin_percent: string;
            /** 옵션 */
            options: string;
            /** 원가 */
            org_price: number;
            /** 상품코드 Element */
            product_id: string;
            /** MD */
            product_md: string;
            /** 상품명 */
            product_name: string;
            /** 판매가 */
            shop_price: number;
            /** 정상재고 Element */
            stock: string;
            /** 원가합(정상재고+불량재고) */
            stock12_org_price: string;
            /** 입고 */
            stock_in: string;
            /** 누적입고 */
            stock_in_all: string;
            /** 정상재고 */
            stock_normal: string;
            /** 배송 */
            stock_trans: string;
            /** 정상재고(재고단위1) */
            stock_unit1_qty: number;
            /** 입고예정일 */
            stockin_ready_date: string;
            /** 공급처 */
            supply_name: string;
            /** 상품태그 */
            tags: string;
            /** 송장 */
            trans_ready: string;
            balju_28_ave: number;
            ecn_w_stock_sum_key: null;
            stock_alarm1: string;
            stock_alarm1_key: string;
            stock_alarm2: string;
            stock_alarm2_key: string;
        }
        /** 상품관리 */
        interface C200 {
            barcode: string;
            barcode_group: null;
            /** 공급처 상품명 */
            brand: string;
            category: string;
            ecn_code: null;
            ecn_enable_stock: null;
            ecn_w_stock_sum: null;
            enable_stock: string;
            expire_date: string;
            extra_column1: null;
            extra_column2: null;
            extra_column3: null;
            extra_column4: null;
            extra_column5: null;
            extra_column6: null;
            extra_column7: null;
            extra_column8: null;
            extra_column9: null;
            extra_column10: null;
            hold: string;
            image: string;
            laundry_label: null;
            link_id: string;
            location: string;
            maker: string;
            manager1: string;
            manager2: string;
            market_price: string;
            md: string;
            memo: string;
            /** 상품명(html) */
            name: string;
            new_link_id: string;
            options_extra_price: null;
            options_stock: null;
            org_price: string;
            org_price_memo: string;
            org_price_per_shop_price: string;
            origin: string;
            period_alarm: null;
            price_shop_rate: string;
            product_desc: string;
            product_desc2: string;
            product_extra_column1: null;
            product_extra_column2: null;
            product_extra_column3: null;
            product_extra_column4: null;
            product_extra_column5: null;
            product_extra_column6: null;
            product_extra_column7: null;
            product_extra_column8: null;
            product_extra_column9: null;
            product_extra_column10: null;
            product_gift: string;
            /** 상품코드 */
            product_id: string;
            realtime_stock_category: string;
            reg_date: string;
            reg_worker: string;
            sale_date: string;
            secure_stock: number;
            serial_number_type: null;
            shop_name: string;
            /** 판매가(html) */
            shop_price: string;
            /** 판매가 */
            shop_price_str: string;
            shop_product_code: null;
            soldout: string;
            soldout_disable: null;
            status: string;
            stock: string;
            stock_alarm1: string;
            stock_bad: null;
            stock_unit1: string;
            stock_unit2: string;
            stock_unit3: string;
            stock_unit4: string;
            stock_unit5: string;
            stock_unit_barcode1: string;
            stock_unit_barcode2: string;
            stock_unit_barcode3: string;
            stock_unit_barcode4: string;
            stock_unit_barcode5: string;
            stockin_enable: null;
            supply_addr: null;
            supply_contact: null;
            supply_group: null;
            supply_id: null;
            supply_mobile: null;
            /** 공급처 */
            supply_name: string;
            supply_options: null;
            /** 원가(html) */
            supply_price: string;
            /** 원가 */
            supply_price_str: string;
            tags: string;
            temp_soldout: null;
            temp_soldout_disable: null;
            temp_stockin_enable: null;
            trans_fee: string;
            weight: string;
            work: string;
        }
        /** 미배송주문 */
        interface I104 {
            /** 상품코드 */
            code: string;
            /** 관리번호 */
            manageId: string;
            /** 발주일 */
            orderDate: string;
            /** 판매처 */
            seller: string;
            /** 주문번호 */
            orderNo: string;
            /** 판매처상품명 */
            productName: string;
            /** 옵션 */
            option?: string;
            /** 주문자 id */
            orderUser: string;
            /** 고객명 */
            receiverName: string;
            /** 연락처 */
            receiverPhone: string;
            /** 수량 */
            quantity: number;
            /** 누적수량 */
            accQuantity: number;
            /** 배송가능 */
            available: string;
        }
    }
    type Tag = '★100원 후 단종' | '★단종★' | '★단종예정' | '가을시즌제품' | '겨울시즌제품' | '까사발주제품' | '까사제작상품' | '데이터용' | '배대상품' | '봄시즌제품' | '부속품' | '선물하기' | '세트코드' | '시즌품절' | '시즌품절예정' | '여름시즌제품' | '일시품절' | '제작상품' | (string & {});
}
declare class EzadminFetch {
    private readonly host;
    private readonly userAgent;
    private cookieJar;
    private encpar;
    constructor(encpar: string);
    get today(): string;
    static RSA: typeof RSAKey;
    getSession: () => Promise<void>;
    getStock: (parObj: EzadminFetch.Par) => Promise<EzadminFetch.Result<EzadminFetch.Template.I100>>;
    retrieveStock: (code: string) => Promise<({
        err_prd_cnt?: string;
        is_overflow?: null;
        page: string;
        tot_stock?: {
            sum: EzadminFetch.TotalStock;
            [K: string]: EzadminFetch.TotalStock;
        };
    } & {
        records: 0;
        total: 0;
        rows: undefined;
    }) | ({
        err_prd_cnt?: string;
        is_overflow?: null;
        page: string;
        tot_stock?: {
            sum: EzadminFetch.TotalStock;
            [K: string]: EzadminFetch.TotalStock;
        };
    } & {
        records: number;
        total: number;
        rows: EzadminFetch.Row<EzadminFetch.Template.I100>[];
    })>;
    getProduct: (parObj: EzadminFetch.Par) => Promise<EzadminFetch.Result<EzadminFetch.Template.C200>>;
    /** ## 재고 수량이 0이하인 상품 리스트 조회
     * @param codes 상품ID
     * @returns
     */
    getBadStock: (codes: string[]) => Promise<EzadminFetch.Result<EzadminFetch.Template.I100>>;
    /** ## 알림에 필요한 모든 상품의 재고 리스트 조회
     * ### 공급처 리스트
     * 1. ★까사홀딩스[수입]
     * 2. ★까사홀딩스[제작]
     * 3. ★뷰랩
     * 4. ★시미오(해외)
     * 5. ★신성2
     */
    getAllData: () => Promise<EzadminFetch.Result<EzadminFetch.Template.I100>>;
    /** ## 등록된 모든 상품 리스트 조회 */
    getAllProduct: () => Promise<EzadminFetch.Result<EzadminFetch.Template.C200>>;
    /** ## 미배송주문 조회 */
    getSoldoutOrder: (code: string) => Promise<EzadminFetch.Template.I104[]>;
    sendSMSList: (par: EzadminFetch.Par.EL00) => Promise<void>;
}
export default EzadminFetch;
