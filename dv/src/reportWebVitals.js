// This function sends performance metrics to an analytics endpoint
function reportWebVitals(metric) {
    switch (metric.name) {
      case 'FCP': // First Contentful Paint
        // Send data to analytics service
        break;
      case 'LCP': // Largest Contentful Paint
        // Send data to analytics service
        break;
      case 'CLS': // Cumulative Layout Shift
        // Send data to analytics service
        break;
      case 'FID': // First Input Delay
        // Send data to analytics service
        break;
      case 'TTFB': // Time to First Byte
        // Send data to analytics service
        break;
      // Additional cases for other metrics can be added here
      default:
        break;
    }
  }
  
  export default reportWebVitals;
  