import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { HashRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import ScrollToTop from './components/ScrollToTop';
import ProtectedRoute from '@/components/ProtectedRoute';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import ForgotPassword from '@/pages/ForgotPassword';
import ResetPassword from '@/pages/ResetPassword';
import SiteLayout from '@/components/site/SiteLayout';
import Home from '@/pages/Home';
import Services from '@/pages/Services';
import ServiceDetail from '@/pages/ServiceDetail';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Review from '@/pages/Review';
import Jobs from '@/pages/Jobs';
import Impressum from '@/pages/Impressum';
import Datenschutz from '@/pages/Datenschutz';
import TestimonialPage from '@/pages/TestimonialPage';
import Standorte from '@/pages/Standorte';
import Standort from '@/pages/Standort';
import LandingPage from '@/pages/LandingPage';
import FAQ from '@/pages/FAQ';
import Bewertungen from '@/pages/Bewertungen';
// Add page imports here

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  // Show loading spinner while checking app public settings or auth
  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
      </div>
    );
  }

  // Handle authentication errors
  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      // Redirect to login automatically
      navigateToLogin();
      return null;
    }
  }

  // Render the main app
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/dienstleistungen" element={<Services />} />
        <Route path="/dienstleistungen/:slug" element={<ServiceDetail />} />
        <Route path="/ueber-uns" element={<About />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/bewertung" element={<Review />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="/testimonial/:slug" element={<TestimonialPage />} />
        <Route path="/standorte" element={<Standorte />} />
        <Route path="/standorte/:ort" element={<Standort />} />
        <Route path="/lp/:service/:ort" element={<LandingPage />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/bewertungen" element={<Bewertungen />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};


function App() {

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <ScrollToTop />
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App