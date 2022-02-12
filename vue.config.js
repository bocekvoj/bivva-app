module.exports = {
    devServer: {
        proxy: {
        '^/api': {
            target: 'http://localhost:50208',
            changeOrigin: false,
            logLevel: 'debug',
            secure: false,
            pathRewrite: { '^/api': '/api'},
        },
    }
    }
}