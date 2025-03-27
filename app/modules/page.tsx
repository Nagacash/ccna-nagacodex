"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

// This would normally be fetched from an API or file system
// For now, we'll use dummy data that will be replaced with actual content
const modules = [
  {
    id: 'network-fundamentals',
    title: 'Network Fundamentals',
    category: 'Fundamentals',
    labCount: 4,
    description: 'Learn about network types, components, topologies, and the OSI model.',
    color: 'blue',
    content: `# Network Fundamentals Module

This module covers the essential concepts of networking that form the foundation of the CCNA certification. You'll learn about network types, components, topologies, and the OSI model.

## Learning Objectives

By the end of this module, you will be able to:
- Identify different types of networks and their characteristics
- Understand network components and their functions
- Describe various network topologies and their advantages
- Explain the OSI and TCP/IP models and their layers
- Understand IP addressing and subnetting basics

## Topics Covered

### 1. Introduction to Networks

**What is a network?**  
A network is a collection of computers, servers, mainframes, network devices, peripherals, or other devices connected to allow data sharing.

**Types of networks:**
- **LAN (Local Area Network)**: Networks limited to a small geographic area
- **WAN (Wide Area Network)**: Networks spanning large geographic areas
- **MAN (Metropolitan Area Network)**: Networks spanning a city or large campus
- **PAN (Personal Area Network)**: Networks for connecting devices within a user's workspace

**Network Models:**
- **Client-server networks**: Dedicated servers provide resources to client computers
- **Peer-to-peer networks**: Computers share resources directly without a central server

**Network Components:**
- **Routers**: Direct data packets between networks
- **Switches**: Connect devices within a network
- **Firewalls**: Monitor and filter network traffic
- **Access Points**: Provide wireless network connectivity
- **Modems**: Convert digital signals to analog and vice versa

### 2. Network Topologies

**Bus Topology**
- All devices connect to a single cable
- Simple and inexpensive to implement
- Vulnerable to cable failures

**Star Topology**
- All devices connect to a central hub or switch
- Easy to add new devices
- Central point of failure

**Ring Topology**
- Devices connect in a closed loop
- Data travels in one direction
- Failure of one device can affect the entire network

**Mesh Topology**
- Devices connect to multiple other devices
- Highly redundant and fault-tolerant
- Expensive and complex to implement

**Hybrid Topology**
- Combination of two or more topologies
- Balances advantages and disadvantages of different topologies

### 3. The OSI Model

The OSI (Open Systems Interconnection) model divides network communication into seven layers:

**Physical Layer (Layer 1)**
- Deals with physical connection between devices
- Defines hardware specifications
- Transmits raw bit stream over physical medium

**Data Link Layer (Layer 2)**
- Provides node-to-node data transfer
- Detects and corrects errors from Physical layer
- Defines protocols for flow control

**Network Layer (Layer 3)**
- Provides routing and forwarding of packets
- Handles logical addressing (IP)
- Manages traffic control

**Transport Layer (Layer 4)**
- Provides end-to-end communication
- Ensures reliable data delivery
- Handles segmentation and reassembly

**Session Layer (Layer 5)**
- Establishes, maintains, and terminates connections
- Manages session checkpointing and recovery
- Controls dialog between applications

**Presentation Layer (Layer 6)**
- Translates data between application and network formats
- Handles encryption/decryption
- Manages data compression

**Application Layer (Layer 7)**
- Provides network services to applications
- Interfaces directly with end users
- Examples: HTTP, FTP, SMTP, DNS

### 4. TCP/IP Model

The TCP/IP model is a simplified version of the OSI model with four layers:

**Network Interface Layer**
- Corresponds to OSI Physical and Data Link layers
- Handles physical addressing and media access
- Examples: Ethernet, Wi-Fi

**Internet Layer**
- Corresponds to OSI Network layer
- Handles logical addressing and routing
- Primary protocol: IP (IPv4, IPv6)

**Transport Layer**
- Corresponds to OSI Transport layer
- Provides end-to-end communication
- Primary protocols: TCP, UDP

**Application Layer**
- Corresponds to OSI Session, Presentation, and Application layers
- Provides network services to applications
- Examples: HTTP, FTP, DNS, SMTP

### 5. IP Addressing

**IPv4 vs IPv6**
- IPv4: 32-bit addresses (4.3 billion addresses)
- IPv6: 128-bit addresses (340 undecillion addresses)
- IPv6 eliminates need for NAT and improves routing efficiency

**IP Address Classes**
- **Class A**: 1.0.0.0 to 126.255.255.255 (Large networks)
- **Class B**: 128.0.0.0 to 191.255.255.255 (Medium networks)
- **Class C**: 192.0.0.0 to 223.255.255.255 (Small networks)
- **Class D**: 224.0.0.0 to 239.255.255.255 (Multicast)
- **Class E**: 240.0.0.0 to 255.255.255.255 (Experimental)

**Subnetting Basics**
- Divides a network into smaller subnetworks
- Uses subnet masks to identify network and host portions
- Improves security and reduces network congestion

**Public vs Private IP Addresses**
- **Private**: 
  - 10.0.0.0 to 10.255.255.255 (Class A)
  - 172.16.0.0 to 172.31.255.255 (Class B)
  - 192.168.0.0 to 192.168.255.255 (Class C)
- **Public**: All other IPv4 addresses

## Lab Exercises

### Lab 1: Network Device Identification
In this lab, you'll learn to identify different network devices and their functions in a network topology.

**Objectives:**
- Identify routers, switches, firewalls, and access points
- Understand the role of each device in a network
- Create a basic network diagram

### Lab 2: Analyzing Network Traffic
Using Wireshark, you'll capture and analyze network traffic to understand the OSI model in action.

**Objectives:**
- Install and configure Wireshark
- Capture network traffic
- Analyze packet headers at different OSI layers
- Identify protocols at each layer

### Lab 3: IP Addressing and Subnetting
Practice IP addressing and subnetting to understand how networks are divided and organized.

**Objectives:**
- Calculate subnet masks
- Determine network and broadcast addresses
- Identify valid host addresses
- Create a subnetting scheme for a given network

### Lab 4: Basic Network Configuration
Configure basic network settings on Cisco devices using the command-line interface.

**Objectives:**
- Access device command line
- Configure hostnames and passwords
- Set up IP addressing
- Verify connectivity between devices

## Assessment

Test your knowledge with our interactive quizzes and practical exercises to ensure you've mastered the fundamentals of networking.

## Resources

- Cisco CCNA Lab Guide
- Network Fundamentals Cheat Sheet
- Interactive Network Topology Simulator
- Command Reference Guide`
  },
  {
    id: 'routing-switching',
    title: 'Routing & Switching',
    category: 'Configuration',
    labCount: 6,
    description: 'Master router and switch configuration, VLANs, and routing protocols.',
    color: 'cyan',
    content: `# Routing & Switching Module

This module covers the essential concepts of routing and switching that are core to the CCNA certification. You'll learn how to configure and troubleshoot routers and switches in a network environment.

## Learning Objectives

By the end of this module, you will be able to:
- Configure basic settings on Cisco routers and switches
- Understand and implement VLANs and trunking
- Configure and verify inter-VLAN routing
- Implement static and dynamic routing protocols
- Troubleshoot common routing and switching issues

## Topics Covered

### 1. Router and Switch Basics

**Router Components and Functions**
- CPU, RAM, NVRAM, Flash memory
- Routing table maintenance
- Packet forwarding
- Network segmentation

**Switch Components and Functions**
- ASIC hardware
- MAC address table
- Frame forwarding
- Loop prevention

**Basic Device Configuration**
- Console connection setup
- Initial configuration dialog
- Command modes (User EXEC, Privileged EXEC, Global Configuration)
- Interface configuration

**IOS Command Structure**
- Command syntax and shortcuts
- Tab completion and context-sensitive help
- Command history and editing
- Configuration verification commands

**Device Management and Security**
- Local and remote access methods
- Authentication configuration
- Password encryption
- Privilege levels

### 2. VLANs and Trunking

**VLAN Concepts and Benefits**
- Broadcast domain segmentation
- Security enhancement
- Flexible network design
- Traffic management

**Creating and Assigning VLANs**
- VLAN database configuration
- Port assignment to VLANs
- VLAN verification commands
- Voice VLAN configuration

**VLAN Trunking Protocol (VTP)**
- VTP modes: server, client, transparent
- VTP domain configuration
- VTP pruning
- VTP version differences

**Trunk Configuration**
- 802.1Q encapsulation
- Native VLAN configuration
- Allowed VLANs on trunks
- DTP (Dynamic Trunking Protocol)

**Native VLANs and Voice VLANs**
- Native VLAN security considerations
- Voice VLAN implementation
- QoS for voice traffic
- Auto-VLAN assignment

### 3. Inter-VLAN Routing

**Router-on-a-Stick Configuration**
- Subinterface creation
- 802.1Q encapsulation on subinterfaces
- IP addressing for each VLAN
- Verification and troubleshooting

**Layer 3 Switching**
- SVI (Switched Virtual Interface)
- Routed ports on switches
- Comparison with router-on-a-stick
- Performance considerations

**SVI (Switched Virtual Interface)**
- Creating and configuring SVIs
- IP addressing for SVIs
- SVI state and line protocol
- Best practices for SVI implementation

**Troubleshooting Inter-VLAN Routing**
- Common issues and solutions
- Verification commands
- Traffic flow analysis
- Configuration validation

### 4. Routing Fundamentals

**Static Routing**
- Static route syntax and configuration
- Next-hop vs. exit-interface specification
- Floating static routes
- IPv6 static routes

**Default Routing**
- Default route configuration
- When to use default routes
- Multiple default routes
- Verification commands

**Administrative Distance**
- Understanding route preference
- Default AD values for different routing sources
- Modifying administrative distance
- Route selection process

**Routing Tables**
- Structure and components
- Route lookup process
- Connected, static, and dynamic routes
- Classful vs. classless routing

**Path Selection**
- Best path determination
- Metric calculation
- Equal-cost load balancing
- Unequal-cost load balancing (EIGRP)

### 5. Dynamic Routing Protocols

**RIP (Routing Information Protocol)**
- RIPv1 vs. RIPv2
- Configuration steps
- Limitations and best practices
- Troubleshooting RIP issues

**OSPF (Open Shortest Path First)**
- OSPF areas and router types
- Single-area OSPF configuration
- OSPF neighbor relationships
- OSPF metric calculation

**EIGRP (Enhanced Interior Gateway Routing Protocol)**
- EIGRP components and operation
- Configuration steps
- DUAL algorithm
- EIGRP for IPv6

**Route Redistribution Basics**
- Redistributing between routing protocols
- Metric conversion
- Filtering redistributed routes
- Preventing routing loops

## Lab Exercises

### Lab 1: Basic Router and Switch Configuration
Configure hostnames, passwords, banners, and management interfaces on Cisco devices.

**Objectives:**
- Connect to devices using console
- Configure basic device settings
- Set up secure password policies
- Configure management interfaces

### Lab 2: VLAN Configuration
Create VLANs, assign ports to VLANs, and configure trunking between switches.

**Objectives:**
- Create and name VLANs
- Assign access ports to VLANs
- Configure trunk links
- Verify VLAN operation

### Lab 3: Inter-VLAN Routing
Configure router-on-a-stick to enable communication between different VLANs.

**Objectives:**
- Configure router subinterfaces
- Set up 802.1Q encapsulation
- Verify inter-VLAN communication
- Troubleshoot connectivity issues

### Lab 4: Static Routing
Configure static routes to enable communication between different networks.

**Objectives:**
- Analyze network topology
- Determine appropriate static routes
- Configure and verify static routes
- Test end-to-end connectivity

### Lab 5: OSPF Configuration
Implement OSPF routing protocol in a multi-router environment.

**Objectives:**
- Configure single-area OSPF
- Verify OSPF neighbor relationships
- Examine OSPF database
- Test route failover scenarios

### Lab 6: Routing Protocol Troubleshooting
Identify and resolve common routing protocol issues.

**Objectives:**
- Diagnose neighbor relationship problems
- Resolve route advertisement issues
- Fix path selection problems
- Implement route filtering

## Assessment

Test your knowledge with our interactive quizzes and practical exercises to ensure you've mastered routing and switching concepts.

## Resources

- Cisco CCNA Lab Guide
- Routing and Switching Command Reference
- Interactive Network Topology Simulator
- Troubleshooting Flowcharts`
  },
  {
    id: 'network-security',
    title: 'Network Security',
    category: 'Security',
    labCount: 5,
    description: 'Implement ACLs, port security, and device hardening techniques.',
    color: 'green',
    content: `# Network Security Module

This module covers essential network security concepts and practices that are crucial for the CCNA certification. You'll learn how to implement security measures to protect network infrastructure and data.

## Learning Objectives

By the end of this module, you will be able to:
- Implement access control lists (ACLs) to filter network traffic
- Configure port security on switches to prevent unauthorized access
- Understand and implement device hardening techniques
- Configure basic firewall functionality
- Identify common security threats and mitigation strategies

## Topics Covered

### 1. Network Security Fundamentals

**Security Threats and Vulnerabilities**
- Common attack vectors
- Malware types (viruses, worms, trojans, ransomware)
- Social engineering techniques
- Denial of Service (DoS) attacks
- Man-in-the-middle attacks

**Defense-in-Depth Approach**
- Multiple layers of security
- Physical, technical, and administrative controls
- Security zones and boundaries
- Principle of least privilege

**CIA Triad**
- Confidentiality: Preventing unauthorized access to information
- Integrity: Ensuring information accuracy and reliability
- Availability: Ensuring systems and data are accessible when needed

**Security Policies and Procedures**
- Acceptable use policies
- Password policies
- Incident response procedures
- Change management
- Security awareness training

**Regulatory Compliance Basics**
- Industry standards (ISO 27001, NIST)
- Sector-specific regulations (HIPAA, PCI DSS, GDPR)
- Compliance auditing
- Documentation requirements

### 2. Access Control Lists (ACLs)

**Standard ACLs**
- Filtering based on source IP address only
- Numbered 1-99 and 1300-1999
- Configuration syntax and placement
- Wildcard mask usage

**Extended ACLs**
- Filtering based on source/destination IP, protocol, and ports
- Numbered 100-199 and 2000-2699
- Configuration syntax and examples
- Complex matching criteria

**Named ACLs**
- Advantages over numbered ACLs
- Configuration syntax
- Editing capabilities
- Descriptive naming conventions

**ACL Placement and Direction**
- Inbound vs. outbound ACLs
- Router placement considerations
- Performance impact
- Best practices for ACL design

**Troubleshooting ACLs**
- Common configuration errors
- Verification commands
- Testing methodology
- Implicit deny rule considerations

### 3. Switch Security

**Port Security Configuration**
- MAC address learning and limiting
- Violation modes (protect, restrict, shutdown)
- Sticky MAC addresses
- Age timer configuration

**MAC Address Filtering**
- Static MAC address configuration
- MAC address table management
- Port-to-MAC binding
- Verification commands

**DHCP Snooping**
- Trusted vs. untrusted ports
- DHCP snooping database
- Rate limiting DHCP messages
- Option 82 configuration

**Dynamic ARP Inspection**
- ARP spoofing protection
- Trusted interfaces
- Validation criteria
- Integration with DHCP snooping

**IP Source Guard**
- Preventing IP spoofing
- DHCP snooping integration
- Static binding configuration
- Verification and monitoring

### 4. Device Hardening

**Securing Management Interfaces**
- Control plane policing
- Management plane protection
- ACL restrictions on management traffic
- Out-of-band management

**Password Policies**
- Strong password requirements
- Password encryption
- Authentication timeout
- Login attempt restrictions

**Role-Based Access Control**
- Privilege levels
- Command authorization
- AAA implementation
- TACACS+ and RADIUS integration

**Disabling Unused Services**
- Identifying unnecessary services
- Service shutdown procedures
- Port closure
- Feature disablement

**Firmware Updates and Patches**
- Update verification
- Rollback procedures
- Scheduled maintenance
- Testing before deployment

### 5. VPN and Encryption Basics

**IPsec Fundamentals**
- Authentication Header (AH)
- Encapsulating Security Payload (ESP)
- Transport and tunnel modes
- Security associations

**SSL/TLS Overview**
- Handshake process
- Certificate validation
- Cipher suites
- Implementation considerations

**Site-to-Site VPNs**
- Design considerations
- Implementation steps
- Troubleshooting methodology
- High availability options

**Remote Access VPNs**
- Client configuration
- Authentication methods
- Split tunneling
- Connection profiles

**Encryption Algorithms**
- Symmetric vs. asymmetric encryption
- Common algorithms (AES, RSA, ECC)
- Key management
- Hashing functions

## Lab Exercises

### Lab 1: Configuring Standard and Extended ACLs
Implement ACLs to control traffic flow between networks based on source/destination addresses and protocols.

**Objectives:**
- Create standard ACLs to filter traffic by source
- Implement extended ACLs for protocol-specific filtering
- Apply ACLs to router interfaces
- Verify ACL operation and troubleshoot issues

### Lab 2: Implementing Port Security
Configure port security on switches to limit the number of MAC addresses per port and prevent MAC address spoofing.

**Objectives:**
- Configure port security with different violation modes
- Implement sticky MAC address learning
- Test security violation responses
- Verify and monitor port security status

### Lab 3: Device Hardening
Apply best practices for securing Cisco devices, including password policies, SSH configuration, and disabling unused services.

**Objectives:**
- Configure secure password policies
- Implement SSH for remote management
- Disable unnecessary services
- Secure the control and management planes

### Lab 4: Configuring Zone-Based Firewall
Implement basic firewall functionality to protect internal networks from external threats.

**Objectives:**
- Define security zones
- Create zone pairs and policies
- Configure inspection rules
- Test and verify firewall operation

### Lab 5: Security Monitoring and Logging
Configure logging and monitoring to detect and respond to security incidents.

**Objectives:**
- Configure syslog settings
- Implement SNMP for monitoring
- Set up logging filters and destinations
- Analyze security event logs

## Assessment

Test your knowledge with our interactive quizzes and practical exercises to ensure you've mastered network security concepts and implementation.

## Resources

- Cisco CCNA Lab Guide
- Network Security Best Practices
- ACL Configuration Cheat Sheet
- Security Troubleshooting Guide`
  },
  {
    id: 'ip-services',
    title: 'IP Services',
    category: 'Advanced',
    labCount: 3,
    description: 'Configure DHCP, NAT, NTP, and other essential IP services.',
    color: 'purple',
    content: `# IP Services Module

This module covers essential IP services that are critical for network operations and part of the CCNA certification. You'll learn how to configure and troubleshoot various network services that enhance connectivity and management.

## Learning Objectives

By the end of this module, you will be able to:
- Configure and verify DHCP on Cisco routers
- Implement Network Address Translation (NAT) and Port Address Translation (PAT)
- Configure Network Time Protocol (NTP) for time synchronization
- Understand and implement quality of service (QoS) mechanisms
- Configure and troubleshoot SNMP and Syslog for network monitoring

## Topics Covered

### 1. DHCP Configuration

**DHCP Operation and Message Types**
- DHCP Discover, Offer, Request, Acknowledge (DORA)
- DHCP options and parameters
- Lease negotiation process
- DHCP relay agent operation

**Configuring DHCP Server on Cisco Routers**
- DHCP pool creation
- Network and subnet configuration
- Default gateway and DNS settings
- Lease duration settings

**DHCP Relay Agent Configuration**
- Helper address configuration
- Multiple relay scenarios
- DHCP forwarding across VLANs
- Verification commands

**DHCP Troubleshooting**
- Common DHCP issues
- Debug commands
- IP helper address verification
- Client-side troubleshooting

**DHCPv6 Basics**
- Stateful vs. stateless DHCPv6
- DHCPv6 prefix delegation
- DHCPv6 relay agent
- Dual-stack implementation

### 2. Network Address Translation (NAT)

**NAT Concepts and Terminology**
- Inside local and global addresses
- Outside local and global addresses
- NAT operation and packet flow
- NAT advantages and limitations

**Static NAT Configuration**
- One-to-one address mapping
- Configuration syntax
- Verification commands
- Bidirectional communication

**Dynamic NAT Configuration**
- Address pool definition
- NAT overload (PAT)
- Port preservation
- Timeouts and limits

**PAT (Port Address Translation)**
- Many-to-one address mapping
- Port number assignment
- Configuration examples
- Scalability considerations

**NAT for IPv6**
- NAT64 and NPTv6
- Dual-stack environments
- Translation mechanisms
- Implementation considerations

### 3. Network Time Protocol (NTP)

**NTP Architecture**
- Stratum levels
- Server and client modes
- Peer relationships
- Authentication options

**NTP Server Configuration**
- Reference clock configuration
- Stratum settings
- Access restrictions
- Broadcast/multicast options

**NTP Client Configuration**
- Server selection
- Preferred servers
- Update intervals
- Status verification

**NTP Security**
- Authentication keys
- Access groups
- Trusted key configuration
- Preventing NTP amplification attacks

**Troubleshooting NTP**
- Verification commands
- Common issues
- Synchronization problems
- Debugging techniques

### 4. Quality of Service (QoS)

**QoS Fundamentals**
- Need for traffic prioritization
- QoS models (Best Effort, IntServ, DiffServ)
- Classification and marking
- Traffic characteristics

**Classification and Marking**
- Layer 2 marking (CoS)
- Layer 3 marking (DSCP, IP Precedence)
- NBAR (Network-Based Application Recognition)
- Policy maps and class maps

**Congestion Management**
- Queuing mechanisms
- FIFO, WFQ, CBWFQ, LLQ
- Queue monitoring
- Bandwidth allocation

**Congestion Avoidance**
- Random Early Detection (RED)
- Weighted Random Early Detection (WRED)
- ECN (Explicit Congestion Notification)
- Drop thresholds

**QoS Implementation Steps**
- Traffic identification
- Policy creation
- Interface application
- Monitoring and verification

### 5. Network Monitoring

**SNMP (Simple Network Management Protocol)**
- SNMPv2c vs. SNMPv3
- MIB (Management Information Base)
- SNMP communities
- Traps and informs

**Syslog Configuration**
- Severity levels
- Local and remote logging
- Facility configuration
- Message format

**NetFlow**
- Flow collection and analysis
- NetFlow configuration
- Export formats
- Traffic analysis

**IP SLA (Service Level Agreement)**
- Operation types
- Scheduling and thresholds
- Tracking configuration
- Performance monitoring

**Network Management Tools**
- Cisco Prime Infrastructure
- Third-party monitoring solutions
- Dashboard creation
- Alert configuration

## Lab Exercises

### Lab 1: DHCP and NAT Configuration
Configure DHCP server on a Cisco router and implement NAT/PAT for internet connectivity.

**Objectives:**
- Configure DHCP server with multiple scopes
- Set up DHCP relay for remote networks
- Implement PAT for internet access
- Configure static NAT for server access
- Verify and troubleshoot configuration

### Lab 2: NTP and Syslog Implementation
Set up time synchronization and centralized logging for network devices.

**Objectives:**
- Configure NTP server and clients
- Implement NTP authentication
- Set up local and remote syslog
- Configure logging severity levels
- Verify proper operation

### Lab 3: QoS Implementation
Implement basic QoS mechanisms to prioritize voice and critical application traffic.

**Objectives:**
- Classify and mark traffic
- Configure queuing mechanisms
- Implement congestion avoidance
- Apply QoS policies to interfaces
- Test and verify QoS operation

## Assessment

Test your knowledge with our interactive quizzes and practical exercises to ensure you've mastered IP services configuration and troubleshooting.

## Resources

- Cisco CCNA Lab Guide
- IP Services Configuration Examples
- QoS Design Guide
- NAT Troubleshooting Flowchart`
  },
  {
    id: 'wireless-networking',
    title: 'Wireless Networking',
    category: 'Wireless',
    labCount: 4,
    description: 'Learn wireless standards, security, and configuration techniques.',
    color: 'yellow',
    content: `# Wireless Networking Module

This module covers essential wireless networking concepts and configuration techniques required for the CCNA certification. You'll learn about wireless standards, security mechanisms, and implementation strategies.

## Learning Objectives

By the end of this module, you will be able to:
- Understand wireless networking standards and technologies
- Configure basic wireless network settings
- Implement wireless security mechanisms
- Troubleshoot common wireless networking issues
- Design basic wireless network deployments

## Topics Covered

### 1. Wireless Fundamentals

**Wireless Standards**
- IEEE 802.11 standards (a/b/g/n/ac/ax)
- Frequency bands (2.4 GHz vs. 5 GHz)
- Channel width and selection
- Data rates and range considerations

**Wireless Components**
- Access Points (APs)
- Wireless LAN Controllers (WLCs)
- Antennas and their characteristics
- Wireless clients and compatibility

**RF Fundamentals**
- Signal propagation and coverage
- Interference sources and mitigation
- Signal-to-noise ratio (SNR)
- Received signal strength indicator (RSSI)

**Wireless Network Architectures**
- Autonomous AP deployment
- Controller-based deployment
- Cloud-managed wireless
- Mesh networks

**Wireless Roaming**
- Layer 2 vs. Layer 3 roaming
- Fast secure roaming
- Roaming domains
- Seamless mobility

### 2. Wireless Network Configuration

**Basic AP Configuration**
- Initial setup and access
- SSID configuration
- Channel and power settings
- Management interface setup

**Wireless LAN Controller Configuration**
- Controller discovery methods
- AP join process
- Interface configuration
- WLAN creation

**Radio Resource Management**
- Dynamic channel assignment
- Transmit power control
- Coverage hole detection
- RF profiles

**Client Connection Process**
- Discovery and probing
- Authentication and association
- Key exchange
- Data transfer

**Wireless QoS**
- WMM (Wi-Fi Multimedia)
- Traffic prioritization
- Call Admission Control
- Bandwidth management

### 3. Wireless Security

**Authentication Methods**
- Open authentication
- Pre-shared key (PSK)
- 802.1X/EAP authentication
- MAC filtering

**Encryption Protocols**
- WEP (obsolete)
- WPA/WPA2 Personal
- WPA2/WPA3 Enterprise
- TKIP vs. AES-CCMP

**Wireless Threats**
- Rogue access points
- Evil twin attacks
- Deauthentication attacks
- Wireless sniffing

**Security Implementation**
- RADIUS server integration
- Certificate deployment
- Identity management
- Guest network isolation

**Wireless IDS/IPS**
- Rogue detection and containment
- Signature-based detection
- Anomaly-based detection
- Wireless monitoring

### 4. Wireless Troubleshooting

**Client Connectivity Issues**
- Association problems
- Authentication failures
- IP addressing issues
- Signal strength problems

**Performance Troubleshooting**
- Throughput analysis
- Interference identification
- Channel utilization
- Capacity planning

**Tools and Commands**
- Wireless packet capture
- Site survey tools
- CLI debugging commands
- Controller monitoring features

**Common Wireless Problems**
- Hidden node problem
- Near/far problem
- Co-channel interference
- Non-Wi-Fi interference

**Troubleshooting Methodology**
- Systematic approach
- Isolating variables
- Documentation
- Escalation procedures

### 5. Wireless Network Design

**Site Survey Process**
- Pre-deployment survey
- Predictive modeling
- Active site survey
- Post-deployment validation

**Capacity Planning**
- User density estimation
- Application requirements
- Bandwidth calculations
- AP placement

**High-Density Deployments**
- Cell sizing
- Channel reuse
- Antenna selection
- Load balancing

**Special Considerations**
- Outdoor deployments
- Industrial environments
- Healthcare facilities
- Educational institutions

**Documentation**
- Network diagrams
- Configuration templates
- Channel plans
- Coverage maps

## Lab Exercises

### Lab 1: Basic Wireless Network Setup
Configure a basic wireless network with security using autonomous access points.

**Objectives:**
- Configure basic AP settings
- Set up multiple SSIDs
- Implement WPA2-Personal security
- Verify client connectivity
- Troubleshoot basic issues

### Lab 2: Wireless LAN Controller Configuration
Set up a wireless network using a controller-based architecture.

**Objectives:**
- Configure the wireless LAN controller
- Add and manage access points
- Create WLANs with different security settings
- Implement QoS policies
- Monitor wireless clients

### Lab 3: Wireless Security Implementation
Configure enterprise-grade wireless security with 802.1X authentication.

**Objectives:**
- Set up a RADIUS server
- Configure WPA2-Enterprise
- Implement certificate-based authentication
- Create a secure guest network
- Test and verify security settings

### Lab 4: Wireless Troubleshooting
Identify and resolve common wireless network issues.

**Objectives:**
- Diagnose client connectivity problems
- Resolve authentication failures
- Identify and mitigate interference
- Optimize wireless performance
- Document troubleshooting process

## Assessment

Test your knowledge with our interactive quizzes and practical exercises to ensure you've mastered wireless networking concepts and implementation.

## Resources

- Cisco CCNA Lab Guide
- Wireless Design Best Practices
- Wireless Troubleshooting Guide
- RF Fundamentals Reference`
  }
];

export default function ModulesPage() {
  const [selectedModule, setSelectedModule] = useState(null);
  const [showAllModules, setShowAllModules] = useState(true);

  const handleModuleSelect = (moduleId) => {
    const module = modules.find(m => m.id === moduleId);
    setSelectedModule(module);
    setShowAllModules(false);
  };

  const handleBackClick = () => {
    setSelectedModule(null);
    setShowAllModules(true);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const getColorClass = (color) => {
    const colorMap = {
      blue: 'bg-blue-100 border-blue-300 text-blue-800',
      cyan: 'bg-cyan-100 border-cyan-300 text-cyan-800',
      green: 'bg-green-100 border-green-300 text-green-800',
      purple: 'bg-purple-100 border-purple-300 text-purple-800',
      yellow: 'bg-yellow-100 border-yellow-300 text-yellow-800',
    };
    return colorMap[color] || 'bg-gray-100 border-gray-300 text-gray-800';
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {showAllModules ? (
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h1 className="text-3xl font-bold text-blue-900 mb-8">CCNA Course Modules</h1>
          <p className="text-gray-600 mb-12 max-w-4xl">
            Our comprehensive CCNA course is divided into focused modules that cover all aspects of the certification. 
            Each module includes detailed explanations, interactive labs, and assessments to ensure you master the material.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, index) => (
              <motion.div 
                key={module.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className={`p-4 ${getColorClass(module.color)}`}>
                  <h2 className="text-xl font-semibold">{module.title}</h2>
                  <span className="text-sm font-medium px-2 py-1 rounded-full bg-white bg-opacity-50 inline-block mt-1">
                    {module.category}
                  </span>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 mb-4">{module.description}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    {module.labCount} Lab Exercises
                  </div>
                  <button
                    onClick={() => handleModuleSelect(module.id)}
                    className="w-full py-2 px-4 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors"
                  >
                    View Module
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ) : (
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <button
            onClick={handleBackClick}
            className="flex items-center text-blue-700 hover:text-blue-900 mb-6 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Modules
          </button>

          {selectedModule && (
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className={`p-4 ${getColorClass(selectedModule.color)}`}>
                <h1 className="text-2xl font-bold">{selectedModule.title}</h1>
                <span className="text-sm font-medium px-2 py-1 rounded-full bg-white bg-opacity-50 inline-block mt-1">
                  {selectedModule.category}
                </span>
              </div>
              <div className="p-6">
                <div className="prose prose-blue max-w-none prose-headings:font-bold prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg prose-h4:text-base prose-p:text-gray-600 prose-strong:font-semibold prose-ul:list-disc prose-ol:list-decimal prose-li:my-1 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline">
                  <ReactMarkdown>
                    {selectedModule.content}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
}
