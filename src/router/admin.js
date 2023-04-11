const admin = [
    {
        path : "/admin",
        component : () => import('../layouts/admin-layout.vue'),
        children : [
            // {
            //     path : 'product',
            //     name : "admin-product",
            //     component : ()=> import('../views/admin/Product/ProductView.vue'),
            //     meta: {
            //         requiresAuth: true, // đường dẫn này yêu cầu đăng nhập
            //       },
            // },
            {
                path : "dashboard",
                name : "admin-dashboard",
                component : ()=> import('../views/admin/DashBoardView.vue'),
                // meta: {
                //     requiresAuth: true, // đường dẫn này yêu cầu đăng nhập
                //   },
            },
            {
                path : "category",
                name : "admin-category",
                component : ()=> import('../views/admin/CategoryView.vue'),
                // meta: {
                //     requiresAuth: true, // đường dẫn này yêu cầu đăng nhập
                //   },
            },
            {
                path : "product",
                name : "admin-product",
                component : ()=> import('../views/admin/ProductView.vue'),
                // meta: {
                //     requiresAuth: true, // đường dẫn này yêu cầu đăng nhập
                //   },
            },
        ],
        
    },

]



export default admin