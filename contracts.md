# VeriHub Landing Page - Contracts & Integration Guide

## Project Overview
**Status**: Frontend-only landing page with mock data (v1.0)
**Tech Stack**: React 19, Tailwind CSS, Lucide Icons
**Theme**: Dark mode with purple/blue gradient accents

---

## Current Implementation (Frontend Only)

### Mock Data Location
- **File**: `/app/frontend/src/mockData.js`
- **Purpose**: Simulates backend responses for demonstration

### Mock Data Structure

#### 1. Features Data
```javascript
features[] = {
  id, title, description, icon
}
```

#### 2. Steps Data (How It Works)
```javascript
steps[] = {
  id, title, description, icon
}
```

#### 3. Testimonials Data
```javascript
testimonials[] = {
  id, name, role, company, content, avatar
}
```

#### 4. Demo Dashboard Data
```javascript
demoData = {
  recentVerifications: [{
    id, filename, status, confidence, timestamp, type
  }],
  stats: {
    totalVerifications, accuracy, avgProcessTime, deepfakesDetected
  }
}
```

---

## Future Backend Integration Plan

### API Endpoints to Implement

#### 1. **GET /api/features**
- Returns list of VeriHub features
- Replace: `import { features } from './mockData'`
- With: `axios.get(${API}/features)`

#### 2. **GET /api/testimonials**
- Returns customer testimonials
- Replace: `import { testimonials } from './mockData'`
- With: `axios.get(${API}/testimonials)`

#### 3. **GET /api/demo/verifications**
- Returns recent verification samples for demo dashboard
- Replace: `import { demoData } from './mockData'`
- With: `axios.get(${API}/demo/verifications)`

#### 4. **POST /api/demo/upload**
- For "Try a Demo" functionality
- Accepts file upload and returns verification result
- Status: Not implemented (frontend has click handlers only)

#### 5. **POST /api/auth/register**
- For "Get Started" button functionality
- User registration flow
- Status: Not implemented (button has no action)

#### 6. **POST /api/auth/login**
- For "Login" button functionality
- User authentication
- Status: Not implemented (button has no action)

---

## Component Structure

### Pages
- `HomePage.jsx` - Main landing page wrapper

### Sections
- `Header.jsx` - Fixed header with logo, nav, and CTAs
- `HeroSection.jsx` - Hero with animated gradient background
- `FeaturesSection.jsx` - 6 feature cards with hover effects
- `DemoSection.jsx` - Live demo dashboard mockup
- `HowItWorksSection.jsx` - 3-step process flow
- `TestimonialsSection.jsx` - Customer testimonials
- `Footer.jsx` - Footer with links and social media

### Styles (CSS Modules)
- `HomePage.css` - Global page styles and animations
- `Header.css` - Header styles with scroll effects
- `HeroSection.css` - Hero section with gradient orbs
- `FeaturesSection.css` - Feature card styles
- `DemoSection.css` - Demo dashboard styles
- `HowItWorksSection.css` - Process flow styles
- `TestimonialsSection.css` - Testimonial card styles
- `Footer.css` - Footer styles

---

## Integration Steps

### Step 1: Setup Backend Models
```python
# MongoDB Models
class Feature(BaseModel):
    id: str
    title: str
    description: str
    icon: str

class Testimonial(BaseModel):
    id: str
    name: str
    role: str
    company: str
    content: str
    avatar: str

class Verification(BaseModel):
    id: str
    filename: str
    status: str
    confidence: float
    timestamp: datetime
    type: str
```

### Step 2: Create API Routes
```python
# In backend/server.py
@api_router.get("/features")
async def get_features():
    features = await db.features.find().to_list(100)
    return features

@api_router.get("/testimonials")
async def get_testimonials():
    testimonials = await db.testimonials.find().to_list(100)
    return testimonials

@api_router.get("/demo/verifications")
async def get_demo_verifications():
    verifications = await db.demo_verifications.find().to_list(10)
    return verifications
```

### Step 3: Update Frontend Components
Replace mock imports with API calls:

**Before:**
```javascript
import { features } from '../../mockData';
```

**After:**
```javascript
const [features, setFeatures] = useState([]);

useEffect(() => {
  const fetchFeatures = async () => {
    const response = await axios.get(`${API}/features`);
    setFeatures(response.data);
  };
  fetchFeatures();
}, []);
```

### Step 4: Add Loading States
```javascript
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
```

### Step 5: Connect CTA Buttons
- **Get Started** → Navigate to `/signup` or open signup modal
- **Try a Demo** → Navigate to `/demo` or open upload modal
- **Login** → Navigate to `/login` or open login modal

---

## Button Actions to Implement

### Header
- **Login Button**: Open login modal or redirect to `/login`
- **Get Started Button**: Open signup modal or redirect to `/signup`

### Hero Section
- **Get Started Button**: Same as header
- **Try a Demo Button**: Open demo upload modal or redirect to `/demo`

### How It Works Section
- **Start Free Trial Button**: Open signup modal or redirect to `/signup`

### Footer
- All navigation links need routes or page anchors

---

## Authentication Flow (Future)

### JWT-Based Authentication
1. User clicks "Get Started" or "Login"
2. Modal opens with form
3. Submit credentials to backend
4. Backend validates and returns JWT token
5. Store token in localStorage
6. Update UI to show logged-in state
7. Protected routes redirect to dashboard

### Components Needed
- `LoginModal.jsx`
- `SignupModal.jsx`
- `AuthContext.jsx` (React Context for auth state)
- `ProtectedRoute.jsx` (Route wrapper)

---

## Theme Toggle (Light/Dark Mode)

### Implementation Ready
The design is built with dark mode as primary. To add light mode:

1. Create theme context
2. Add toggle button in header
3. Define light mode color variables
4. Use CSS variables for dynamic switching

### Theme Variables Needed
```css
:root {
  /* Light Mode */
  --bg-primary-light: #FFFFFF;
  --text-primary-light: #000000;
  /* ... other light colors */
}
```

---

## Performance Optimizations

### Current State
- Static content only
- No API calls
- Fast initial load

### Future Optimizations
- Lazy load sections with React.lazy()
- Image optimization (WebP format)
- Code splitting for routes
- Caching API responses
- Debounce scroll animations

---

## Testing Checklist

### ✅ Completed (Frontend)
- [x] Responsive design (mobile, tablet, desktop)
- [x] Smooth scroll animations
- [x] Hover effects on interactive elements
- [x] Header scroll behavior
- [x] All sections render correctly
- [x] Navigation links (scroll to sections)
- [x] Dark theme with purple/blue gradients
- [x] Typography and spacing

### ⏳ Pending (Backend Integration)
- [ ] API endpoint connection
- [ ] Loading states
- [ ] Error handling
- [ ] Form validation
- [ ] File upload for demo
- [ ] User authentication
- [ ] Protected routes

---

## Environment Variables

### Frontend (.env)
```
REACT_APP_BACKEND_URL=<configured>
```

### Backend (.env)
```
MONGO_URL=<configured>
DB_NAME=verihub
JWT_SECRET=<to be added>
JWT_ALGORITHM=HS256
JWT_EXPIRATION=3600
```

---

## Notes for Backend Developer

1. **Mock Data**: All data is currently in `/app/frontend/src/mockData.js`
2. **No Database**: No MongoDB collections created yet
3. **No Auth**: No authentication implemented
4. **No File Upload**: Demo upload is visual only
5. **Pure Frontend**: This is a fully functional landing page with mock data

### Recommended Implementation Order:
1. Create MongoDB models and seed data
2. Build API endpoints for features, testimonials, demo data
3. Add authentication endpoints
4. Implement file upload for demo
5. Add user dashboard
6. Connect all frontend components to backend

---

## Design System

### Colors
- **Primary**: `#6366F1` (Indigo)
- **Secondary**: `#8B5CF6` (Purple)
- **Accent**: `#A78BFA` (Light Purple)
- **Background**: `#000000` (Black)
- **Text**: `#FFFFFF` (White)
- **Muted Text**: `rgba(255, 255, 255, 0.6)`

### Typography
- **Headlines**: 48-72px, Bold
- **Subheadings**: 20-32px, Semi-bold
- **Body**: 16-18px, Regular
- **Small**: 13-14px, Regular

### Spacing
- **Sections**: 100px vertical padding
- **Cards**: 32-40px padding
- **Gaps**: 16-40px between elements

### Border Radius
- **Small**: 8px (buttons, badges)
- **Medium**: 12px (cards)
- **Large**: 16-20px (sections)

---

## Future Enhancements

1. **Analytics Integration** - Track user interactions
2. **Email Capture** - Newsletter signup
3. **Live Chat** - Customer support
4. **Blog Integration** - Content marketing
5. **Pricing Page** - Subscription plans
6. **Documentation** - API docs and guides
7. **Status Page** - System status and uptime
8. **Case Studies** - Customer success stories
9. **Video Demos** - Product walkthrough videos
10. **Interactive Demo** - Real-time verification playground

---

**Last Updated**: November 2024
**Version**: 1.0 (Frontend Only)
**Status**: Production Ready (Landing Page)
