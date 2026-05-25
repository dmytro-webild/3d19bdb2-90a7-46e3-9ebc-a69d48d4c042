"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardTwentyThree from '@/components/sections/feature/FeatureCardTwentyThree';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import { Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="mediumSmall"
        sizing="largeSmall"
        background="floatingGradient"
        cardStyle="inset"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="layered"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",
          id: "#hero",
        },
        {
          name: "Shop",
          id: "#products",
        },
        {
          name: "About",
          id: "#about",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="Ledora"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitTestimonial
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars",
      }}
      title="Experience Timeless Radiance"
      description="Discover Ledora's exclusive collection of artisanal skincare and beauty essentials, crafted with pure ingredients for your natural glow."
      testimonials={[
        {
          name: "Elena V.",
          handle: "@elena_v",
          testimonial: "Ledora changed my skin forever. Simply luxurious.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/beauty-woman-with-ponytail_633478-317.jpg",
        },
        {
          name: "Sarah K.",
          handle: "@sk_beauty",
          testimonial: "The perfect balance of nature and science.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/modern-woman-drinking-coffee_23-2148020563.jpg",
        },
        {
          name: "Marcus R.",
          handle: "@marcus_r",
          testimonial: "High quality service and products. Truly top tier.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/gentle-beauty-model-applying-face-cream-camera-posing-skincare-routine-campaign-bamboo-trees-young-glamorous-woman-with-natural-bare-skin-using-moisturizer-cosmetics_482257-62836.jpg",
        },
        {
          name: "Julia D.",
          handle: "@julia_d",
          testimonial: "My glow has never been better. Thank you Ledora.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/elegant-woman-shiny-long-dress_343629-134.jpg",
        },
        {
          name: "Sofia L.",
          handle: "@sofia_l",
          testimonial: "Elegant, gentle, and extremely effective.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-korean-woman-wearing-eyepatches_23-2150171929.jpg",
        },
      ]}
      buttons={[
        {
          text: "Shop Now",
          href: "#products",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/blue-transparent-luxury-beautiful-crystal_1232-4148.jpg"
      imageAlt="Ledora luxury skincare background"
      mediaAnimation="blur-reveal"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/life-style_1122-1803.jpg",
          alt: "life style",
        },
        {
          src: "http://img.b2bpic.net/free-photo/natural-abstract-background-with-crystal-dew-drops-spider-web-sunlight-with-bokeh_169016-14073.jpg",
          alt: "Natural abstract background with crystal dew drops on a spider web in sunlight with bokeh.",
        },
        {
          src: "http://img.b2bpic.net/free-photo/smiling-woman-sitting-kitchen-with-bright-makeup-wavy-hair_291650-576.jpg",
          alt: "smiling woman sitting in the kitchen with bright makeup and wavy hair",
        },
        {
          src: "http://img.b2bpic.net/free-photo/golden-confetti-new-year-party_23-2148339560.jpg",
          alt: "Golden confetti for new year party",
        },
        {
          src: "http://img.b2bpic.net/free-photo/happy-serene-young-woman-with-beautiful-olive-skin-curly-hair-ideal-skin-brown-eyes-studio_633478-1104.jpg",
          alt: "Happy serene young woman with beautiful olive skin and curly hair ideal skin and brown eyes in studio",
        },
      ]}
      avatarText="Loved by 10,000+ happy clients"
      marqueeItems={[
        {
          type: "text",
          text: "Cruelty-Free",
        },
        {
          type: "text",
          text: "Artisanal Skincare",
        },
        {
          type: "text",
          text: "Sustainable Beauty",
        },
        {
          type: "text",
          text: "Professional Grade",
        },
        {
          type: "text",
          text: "Luxury Ingredients",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="Our Story"
      title="The Art of Natural Luxury"
      description="Ledora was born from the vision of merging timeless traditional beauty wisdom with modern, scientific innovation to create the ultimate skincare experience."
      subdescription="Our products are curated for those who believe that skincare should be an indulgence, not a routine. We source only the finest botanicals, ensuring every bottle meets our high standards for quality and sustainability."
      imageSrc="http://img.b2bpic.net/free-photo/cosmetic-bottle-with-luxurious-art-nouveau-inspired-sun-relief-background_23-2151420715.jpg?_wi=1"
      imageAlt="Ledora luxury skincare brand story"
      mediaAnimation="blur-reveal"
      icon={Sparkles}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyThree
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          id: "f1",
          title: "Skincare",
          tags: [
            "Botanical",
            "Renewing",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/arrangement-with-make-up-container_23-2149030340.jpg",
        },
        {
          id: "f2",
          title: "Haircare",
          tags: [
            "Nourishing",
            "Gloss",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-man-selfcare-products_23-2149313030.jpg",
        },
        {
          id: "f3",
          title: "Fragrance",
          tags: [
            "Artisanal",
            "Unique",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-perfume-bottle-glass-model-red-color-with-gold-plastic-cover_140725-13874.jpg",
        },
      ]}
      title="Curated Collections"
      description="Explore our refined ranges designed to elevate every aspect of your daily self-care ritual."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          brand: "Ledora",
          name: "Hydration Cream",
          price: "$85.00",
          rating: 5,
          reviewCount: "128",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-lipsticks-arrangement_23-2148978182.jpg",
        },
        {
          id: "p2",
          brand: "Ledora",
          name: "Signature Scent",
          price: "$120.00",
          rating: 5,
          reviewCount: "95",
          imageSrc: "http://img.b2bpic.net/free-photo/girly-composition-table_23-2148229230.jpg",
        },
        {
          id: "p3",
          brand: "Ledora",
          name: "Nourishing Oil",
          price: "$65.00",
          rating: 4,
          reviewCount: "72",
          imageSrc: "http://img.b2bpic.net/free-photo/women-s-day-still-life-with-makeup-jewelry_23-2149263194.jpg",
        },
        {
          id: "p4",
          brand: "Ledora",
          name: "Velvet Lipstick",
          price: "$45.00",
          rating: 5,
          reviewCount: "210",
          imageSrc: "http://img.b2bpic.net/free-photo/selfcare-products-arrangement-still-life5_23-2149249544.jpg",
        },
        {
          id: "p5",
          brand: "Ledora",
          name: "Foam Cleanser",
          price: "$40.00",
          rating: 5,
          reviewCount: "154",
          imageSrc: "http://img.b2bpic.net/free-photo/assortment-natural-argan-oil-dropper_23-2149016624.jpg",
        },
        {
          id: "p6",
          brand: "Ledora",
          name: "Night Essence",
          price: "$95.00",
          rating: 5,
          reviewCount: "88",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-selfcare-products-arrangement_23-2149249527.jpg",
        },
      ]}
      title="Exclusive Selection"
      description="The best of our artisanal range, delivered to your door."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardTwo
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      plans={[
        {
          id: "pl1",
          badge: "Popular",
          price: "$150",
          subtitle: "Skincare Essentials Kit",
          buttons: [
            {
              text: "Get Now",
            },
          ],
          features: [
            "Hydration Cream",
            "Foam Cleanser",
            "Free Shipping",
          ],
        },
        {
          id: "pl2",
          badge: "Exclusive",
          price: "$220",
          subtitle: "Ultimate Glow Package",
          buttons: [
            {
              text: "Get Now",
            },
          ],
          features: [
            "Full Skincare Set",
            "Fragrance",
            "VIP Support",
          ],
        },
      ]}
      title="Special Offers"
      description="Exclusive bundles for our loyal beauty enthusiasts."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Elena V.",
          handle: "@elena",
          testimonial: "Incredible products, my skin is so happy.",
          imageSrc: "http://img.b2bpic.net/free-photo/pretty-woman-with-eco-food-bowl_624325-686.jpg",
        },
        {
          id: "t2",
          name: "Sarah K.",
          handle: "@sarah",
          testimonial: "I love the quality and aesthetic of Ledora.",
          imageSrc: "http://img.b2bpic.net/free-photo/dreaming-woman-cafe_171337-16367.jpg",
        },
        {
          id: "t3",
          name: "Marcus R.",
          handle: "@marcus",
          testimonial: "Finally found the perfect scent and skincare.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-woman-with-hydrated-skin_23-2149432196.jpg",
        },
        {
          id: "t4",
          name: "Julia D.",
          handle: "@julia",
          testimonial: "Luxurious feel with great efficacy.",
          imageSrc: "http://img.b2bpic.net/free-photo/black-woman-s-portrait-dramma-look_633478-1621.jpg",
        },
        {
          id: "t5",
          name: "Sofia L.",
          handle: "@sofia",
          testimonial: "Best customer service and fastest shipping.",
          imageSrc: "http://img.b2bpic.net/free-photo/blueeyed-curly-blonde-woman-black-silk-blouse-touches-hair-looks-into-camera-pretty-lady-p_197531-33670.jpg",
        },
      ]}
      title="Glowing Testimonials"
      description="Join our community of thousands who have transformed their routine."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "Are products vegan?",
          content: "Yes, our skincare is 100% plant-derived and cruelty-free.",
        },
        {
          id: "q2",
          title: "Shipping times?",
          content: "Orders are processed within 24 hours.",
        },
        {
          id: "q3",
          title: "Return policy?",
          content: "We offer a 30-day money-back guarantee.",
        },
      ]}
      title="Common Questions"
      description="Find answers to help you choose the best products."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Contact Ledora"
      description="Have questions? Chat with our beauty experts via WhatsApp."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Your Email",
          required: true,
        },
      ]}
      textarea={{
        name: "msg",
        placeholder: "Your message",
        rows: 4,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/cosmetic-bottle-with-luxurious-art-nouveau-inspired-sun-relief-background_23-2151420715.jpg?_wi=2"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "Shop All",
              href: "#products",
            },
            {
              label: "Our Story",
              href: "#about",
            },
          ],
        },
        {
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
        {
          items: [
            {
              label: "Instagram",
              href: "#",
            },
            {
              label: "WhatsApp Support",
              href: "#",
            },
          ],
        },
      ]}
      logoText="Ledora Beauty"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
