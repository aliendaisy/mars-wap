import React,{Component} from 'react';
import TopBar from '../items/topBar';
import PropTypes from 'prop-types';


class Privacy extends Component {
    goBack() {
        this.context.router.history.goBack();
    }
    render() {
        return(
            <div className="agreement">
                <TopBar goBack={this.goBack.bind(this)}/>

                <article>
                    <header>
                        <h3>Privacy Policy</h3>
                        <p>April 15, 2018</p>
                    </header>
                    <section>
                        <p className="paragraph">
                            When you use Marstail, you trust us with your information. We are
                            committed to keeping that trust. That starts with helping you understand
                            our privacy practices.
                        </p>
                        <p className="paragraph">
                            This Privacy Policy describes our policies on the collection, use, and
                            disclosure of information about you in connection with your use of our
                            services, including those offered through our websites, emails, and mobile
                            applications (collectively, the "Service"). This Privacy Statement (“Statement”)
                            applies to persons anywhere in the world who use our apps or Services to request
                            delivery or other on-demand services (“Users”). The terms "we", "us", and "Marstail"
                            refer to Marstail Inc. When you use the Service, you consent to our collection, use,
                            and disclosure of information about you as described in this Privacy Policy.
                        </p>
                    </section>
                    <section>
                        <div className="caption">1. INFORMATION COLLECT AND HOW WE USE IT</div>
                        <p className="paragraph">
                            We may collect and store information about you when you use the Service. We use the
                            information to fulfill your requests, provide the Service’s functionality, improve
                            the Service’s quality, personalize your experience, track usage of the Service, provide
                            feedback to third party businesses that are listed on the Service, display relevant
                            advertising, market the Service, provide customer support, message you, back up our
                            systems and allow for disaster recovery, enhance the security of the Service, and comply
                            with legal obligations.
                        </p>
                        <p className="paragraph">Among the information we collect, please note:</p>
                        <p className="paragraph">
                            <strong>Account Information:</strong> If you create an account on Marstail, we may
                            store and use your full name, email address, zip code, and other information you may
                            provide with your account, such as your gender and birth date. Your first name and last
                            initial, as well as any photo you submit through the registration process, will be
                            publicly displayed as part of your account profile. You can modify some of the
                            information associated with your account here. If you believe that someone has created
                            an unauthorized account depicting you or your likeness, you can request its removal by
                            flagging it.
                        </p>
                        <p className="paragraph">
                            <strong>Public Content:</strong> The information that you contribute through the Service
                            is intended for public consumption, including your reviews, tips, photos, videos,
                            check-ins, comments, likes, posts, events, bookmarks, friends, lists, compliments, and
                            account profile. We may display this information through the Service, share it with
                            businesses, and further distribute it to a wider audience through third party sites and
                            services.
                        </p>
                        <p className="paragraph">
                            <strong>Communications:</strong>When you sign up for an account or use certain features,
                            you are opting to receive messages from other Marstail users, businesses, and Marstail
                            itself. You can manage some of your messaging preferences here, but note that you cannot
                            opt out of receiving certain administrative, transactional, or legal messages from
                            Marstail. For example, if you make a reservation through the Service, we may send you
                            messages about your reservation using the contact information you provide, including
                            SMS text messages to your phone. We may also track your actions in response to the
                            messages you receive from Marstail or through the Service, such as whether you deleted,
                            opened, or forwarded such messages. If you exchange messages with others through the
                            Service, we may store them in order to process and deliver them, allow you to manage
                            them, and we may review and disclose them in connection with investigations related to
                            the operation and use of the Service. We may not deliver messages that we believe are
                            objectionable, such as spam messages or requests to exchange reviews for compensation.
                            If you send or receive messages through the Service via SMS text message, we may log
                            phone numbers, phone carriers, and the date and time that the messages were processed.
                            Carriers may charge recipients for texts that they receive. We may also store
                            information that you provide through communications to us, including from phone calls,
                            letters, emails and other electronic messages, or in person. If you are a
                            representative of a business listed on Marstail, including users of Marstail for
                            Business Owners, we may contact you, including by phone or email, using the contact
                            information you provide us, make publicly available, or that we have on record for your
                            business.
                        </p>
                        <p className="paragraph">
                            <strong>Transactional Information:</strong> If you initiate a transaction through the
                            Service, such as a reservation or purchase, we may collect and store information about
                            you, such as your name, phone number, address, email, and credit card information, as
                            well as any other information you provide to us, in order to process your transaction,
                            send communications about them to you, and populate forms for future transactions.
                            This information may be shared with third parties for the same purposes. Marstail
                            does not disclose your personal information to third parties for the purpose of
                            directly marketing their services to you unless you first agree to such disclosure.
                            When you submit credit card numbers, we encrypt that information using industry
                            standard technology. If you write reviews about businesses with which you transact
                            through the Service, we may publicly display the fact that you transacted with those
                            businesses. For example, if you make a dinner reservation through the Service and write
                            a review about your experience, we may publicly display the fact that you made your
                            dinner reservation through the Service.
                        </p>
                        <p className="paragraph">
                            <strong>Activity:</strong>We may store information about your use of the Service,
                            such as your search activity, the pages you view, the date and time of your visit,
                            businesses you call using our mobile applications, and reservations and purchases you
                            make through the Service. We also may store information that your computer or mobile
                            device provides to us in connection with your use of the Service, such as your browser
                            type, type of computer or mobile device, browser language, IP address, mobile carrier,
                            phone number, unique device identifier, advertising identifier, location (including
                            geolocation, beacon based location, and GPS location), and requested and referring
                            URLs. You may be able to disallow our use of certain location data through your
                            device or browser settings, for example by disabling “Location Services” for the
                            Marstail application in iOS privacy settings.
                        </p>
                    </section>
                    <section>
                        <div className="caption">2. COOKIES</div>
                        <p className="paragraph">
                            We, and third parties with whom we partner, may use cookies, web beacons, tags,
                            scripts, local shared objects such as HTML5 and Flash (sometimes called "flash
                            cookies"), advertising identifiers (including mobile identifiers such as Apple’s
                            IDFA or Google’s Advertising ID) and similar technology ("Cookies") in connection
                            with your use of the Service, third party websites, and mobile applications. Cookies
                            may have unique identifiers, and reside, among other places, on your computer or
                            mobile device, in emails we send to you, and on our web pages. Cookies may transmit
                            information about you and your use of the Service, such as your browser type, search
                            preferences, IP address, data relating to advertisements that have been displayed to
                            you or that you have clicked on, and the date and time of your use. Cookies may be
                            persistent or stored only during an individual session.
                        </p>
                        <p className="paragraph">The purposes for which we use Cookies in the Service include:</p>
                        <p className="paragraph">
                            <strong>Process:</strong>Intended to make the Service work in the way you expect. For
                            example, we use a Cookie that tells us whether you have already signed up for an account.
                        </p>
                        <p className="paragraph">
                            <strong>Authentication, Security, and Compliance:</strong> Intended to prevent fraud,
                            protect your data from unauthorized parties, and comply with legal requirements. For
                            example, we use Cookies to determine if you are logged in.
                        </p>
                        <p className="paragraph">
                            <strong>Preferences:</strong>Intended to remember information about how you prefer
                            the Service to behave and look. For example, we use a Cookie that tells us whether
                            you have declined to allow us to use your phone’s geolocation data.
                        </p>
                        <p className="paragraph">
                            <strong>Notifications:</strong>Intended to allow or prevent notices of information
                            or options that we think could improve your use of the Service. For example, we use
                            a Cookie that stops us from showing you the signup notification if you have already
                            seen it.
                        </p>
                        <p className="paragraph">
                            <strong>Advertising:</strong>Intended to make advertising more relevant to users and
                            more valuable to advertisers. For example, we may use Cookies to serve you
                            interest-based ads, such as ads that are displayed to you based on your visits to other
                            websites, or to tell us if you have recently clicked on an ad.
                        </p>
                        <p className="paragraph">
                            <strong>Analytics:</strong>Intended to help us understand how visitors use the Service.
                            For example, we use a Cookie that tells us how our search suggestions correlate to your
                            interactions with the search page.
                        </p>
                        <p className="paragraph">
                            <strong>Managing Cookies:</strong>It may be possible to disable some (but not all)
                            Cookies through your device or browser settings, but doing so may affect the
                            functionality of the Service. The method for disabling Cookies may vary by device
                            and browser, but can usually be found in preferences or security settings. For example,
                            iOS and Android devices each have settings which are designed to limit forms of ad
                            tracking. For flash cookies, you can manage your privacy settings by clicking here.
                            Please note that changing any of these settings does not prevent the display of all
                            advertisements to you.
                        </p>
                    </section>
                    <section>
                        <div className="caption">3. THIRD PARTIES</div>
                        <p className="paragraph">Third parties may receive information about you as follows:</p>
                        <p className="paragraph">
                            <strong>Advertisers:</strong>We may allow third parties to use Cookies through the
                            Service to collect the same type of information for the same purposes as Martail
                            does for itself. In doing so, Marstail adheres to the Digital Advertising Alliance’s
                            Self-Regulatory Principles for Online Behavioral Advertising. Third parties may be
                            able to associate the information they collect with other information they have about
                            you from other sources. We do not necessarily have access to or control over the
                            Cookies they use. Additionally, we may share non-personally identifiable information
                            from or about you with third parties, such as location data, advertising identifiers,
                            or a cryptographic hash of a common account identifier (such as an email address), to
                            facilitate the display of targeted advertising. You may be able to limit our sharing
                            of some of this information through your mobile device settings, as described in
                            Section 2 above.
                        </p>
                        <p className="paragraph">
                            <strong>Service Providers:</strong>We may rely on third party providers to support
                            or provide some of the services that are available through the Service, such as
                            reservations and food delivery. We may also rely on third party providers to perform
                            certain services for us in connection with your use of the Service, such as
                            communications and hosting services, network security, technical and customer support,
                            tracking and reporting functions, quality assurance testing, payment processing, our
                            own marketing of the Service, and other functions. We may share information from or
                            about you with these third party providers so that they can perform their services
                            or complete your requests. These third party providers may share information with us
                            that they obtain from or about you in connection with providing their services or
                            completing your requests. Third party providers may also share this information with
                            their subsidiaries, joint ventures, or other companies under common control. Some of
                            our web pages utilize framing techniques to serve content to you from our third party
                            providers, while preserving the look and feel of the Service. In such cases, please
                            note that the information you provide is being provided to the third party.
                        </p>
                        <p className="paragraph">
                            <strong>Aggregate Information:</strong>We may share user information in the aggregate
                            with third parties, such as advertisers and content distributors. For example, we may
                            disclose the number of users that have been exposed to, or clicked on, advertisements.
                        </p>
                        <p className="paragraph">
                            <strong>Business Transfers:</strong>We may share information from or about you with
                            our parent companies, subsidiaries, joint ventures, or other companies under common
                            control, in which case we will require them to honor this Privacy Policy. If another
                            company acquires Yelp or all or substantially all of our assets, that company will
                            possess the same information, and will assume the rights and obligations with respect
                            to that information as described in this Privacy Policy.
                        </p>
                        <p className="paragraph">
                            <strong>Businesses on Marstail:</strong>We may share information from or about you
                            (such as your age and gender), your devices, and your use of the Service (such as which
                            businesses you bookmark or call) with businesses listed on Marstail. You may adjust
                            your settings to increase or decrease the amount of information we share. You can view
                            these settings and find more details about what information may be shared here. Keep
                            in mind that businesses may see your Public Content (as defined in Section 1(b) above)
                            and receive information about your transactions with them, regardless of your settings.
                            Additionally, if you make a phone call to a business through or in connection with your
                            use of the Service, we may share information about your call with the business that the
                            business would have received had you called them directly, such as the date and time
                            of your call and your phone number. You may be able to limit our ability to collect and
                            share your phone number through your phone’s settings or phone service provider.
                        </p>
                        <p className="paragraph">
                            <strong>Investigations:</strong>We may investigate and disclose information from or
                            about you if we have a good faith belief that such investigation or disclosure (a)
                            is reasonably necessary to comply with legal process and law enforcement instructions
                            and orders, such as a search warrant, subpoena, statute, judicial proceeding, or
                            other legal process served on us; (b) is helpful to prevent, investigate, or identify
                            possible wrongdoing in connection with the Service; or (c) protects our rights,
                            reputation, property, or that of our users, affiliates, or the public, such as
                            disclosures in connection with our Consumer Alerts program. If you flag or otherwise
                            complain to Marstail about content through the Service, we may share the substance
                            of your complaint with the contributor of that content in order to provide an
                            opportunity for the contributor to respond.
                        </p>
                        <p className="paragraph">
                            <strong>Links:</strong>The Service may contain links to unaffiliated third party
                            services. Except as set forth herein, we do not share your personal information
                            with them, and are not responsible for their privacy practices. We suggest you
                            read the privacy policies on or applicable to all such third party services.
                        </p>
                    </section>
                    <section>
                        <div className="caption">4. CONTROLLING YOUR PERSONAL DATA</div>
                        <p className="paragraph">
                            Other users may be able to identify you, or associate you with your account, if
                            you include personal information in the content you post publicly. You can reduce
                            the risk of being personally identified by using the Service pseudonymously, though
                            doing so could detract from the credibility of your contributions to the Service.
                        </p>
                        <p className="paragraph">
                            Please also note that the messages you send or receive using the Service are only
                            private to the extent that both you and the person you are communicating with keep
                            them private. For example, if you send a message to another user, that user may choose
                            to publicly post it. Also, Marstail may access and disclose such messages in the
                            course of investigations relating to use of the Service.
                        </p>
                    </section>
                    <section>
                        <div className="caption">5. DATA RETENTION AND ACCOUNT TERMINATION</div>
                        <p className="paragraph">
                            You can close your account by clicking here. We will remove your public posts from
                            view and/or dissociate them from your account profile, but we may retain information
                            about you for the purposes authorized under this Privacy Policy unless prohibited
                            by law. For example, we may retain information to prevent, investigate, or identify
                            possible wrongdoing in connection with the Service or to comply with legal obligations.
                            Please note that businesses cannot remove their business listings, ratings, or reviews
                            by closing their accounts.
                        </p>
                    </section>
                    <section>
                        <div className="caption">6. CHILDREN</div>
                        <p className="paragraph">
                            The Service is intended for general audiences and is not directed to children under
                            13. We do not knowingly collect personal information from children under 13. If you
                            become aware that a child has provided us with personal information without parental
                            consent, please contact us here. If we become aware that a child under 13 has provided
                            us with personal information without parental consent, we take steps to remove such
                            information and terminate the child's account.
                        </p>
                    </section>
                    <section>
                        <div className="caption">7. SECURITY</div>
                        <p className="paragraph">
                            We follow generally accepted industry standards to protect the personal information
                            submitted to us, both during transmission and once we receive it. However, no method
                            of transmission over the Internet or via mobile device, or method of electronic
                            storage, is 100% secure. Therefore, while we strive to use commercially acceptable
                            means to protect your personal information, we cannot guarantee its absolute security.
                        </p>
                    </section>
                    <section>
                        <div className="caption">8. CONTACT INFORMATION</div>
                        <p className="paragraph">
                            If you believe that Marstail has not adhered to this Privacy Policy, you may contact
                            us by sending an email to the following
                            address: <span className="email-address">themarstail@gmail.com</span>
                        </p>
                    </section>
                    <section>
                        <div className="caption">10. MODIFICATIONS TO THIS PRIVACY POLICY</div>
                        <p className="paragraph">
                            We may revise this Privacy Policy from time to time. The most current version of the
                            Privacy Policy will govern our collection, use, and disclosure of information about
                            you and will be located here. If we make material changes to this Privacy Policy,
                            we will notify you by email or by posting a notice on the Service prior to the
                            effective date of the changes. By continuing to access or use the Service after
                            those changes become effective, you agree to the revised Privacy Policy.
                        </p>
                    </section>
                </article>
            </div>
        )
    }
}

Privacy.contextTypes = {
    router: PropTypes.object
};

export default Privacy;